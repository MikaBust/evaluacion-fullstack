import { useEffect, useState } from 'react';
import axios from 'axios';
import DataGrid, { Column, Paging, FilterRow, Pager } from 'devextreme-react/data-grid';
import type { Especialidad, Region } from '../types';
import CustomStore from 'devextreme/data/custom_store';
import '../MedicosView.css';

export default function MedicosView() {
    const [especialidades, setEspecialidades] = useState<Especialidad[]>([]);
    const [regiones, setRegiones] = useState<Region[]>([]);

    const [filtros, setFiltros] = useState<{
        NOME: string;
        CDGESP: string;
        CDGREG?: number;
    }>({
        NOME: '',
        CDGESP: '',
        CDGREG: undefined,
    });

    useEffect(() => {
        axios.get('http://localhost:3000/especialidades').then(res => setEspecialidades(res.data));
        axios.get('http://localhost:3000/regiones').then(res => setRegiones(res.data));
    }, []);

    const store = new CustomStore({
        key: 'id',
        load: async (loadOptions) => {
            const take = loadOptions.take ?? 10;
            const skip = loadOptions.skip ?? 0;
            const page = Math.floor(skip / take) + 1;

            let sortField = 'id';
            let sortOrder = 'ASC';

            const sort = loadOptions.sort as Array<{ selector: string; desc: boolean }>;

            if (sort?.length) {
                sortField = sort[0].selector;
                sortOrder = sort[0].desc ? 'DESC' : 'ASC';
            }

            const response = await axios.get('http://localhost:3000/medicos', {
                params: {
                    ...filtros,
                    page,
                    limit: take,
                    sortField,
                    sortOrder,
                },
            });
            return {
                data: response.data.data,
                totalCount: response.data.total,
            };
        },
    });

    return (
        <div className='medicos-container'>

            <div className='filtros-container'>
                <div className='filtro-item'>
                    <label htmlFor='nome'>Physician</label>
                    <input
                        type="text"
                        placeholder=""
                        value={filtros.NOME}
                        onChange={e => setFiltros({ ...filtros, NOME: e.target.value })}
                    />
                </div>

                <div className='filtro-selects'>
                    <div className='filtro-item'>
                        <label htmlFor='especialidad'>Specialty</label>
                        <select onChange={e => setFiltros({ ...filtros, CDGESP: e.target.value })}>
                            <option value="">Select</option>
                            {especialidades.map(esp => (
                                <option key={esp.CDGESP} value={esp.CDGESP}>{esp.NOME}</option>
                            ))}
                        </select>
                    </div>

                    <div className='filtro-item'>
                        <label htmlFor='region'>Region</label>
                        <select value={filtros.CDGREG}
                            onChange={(e) => setFiltros({ ...filtros, CDGREG: e.target.value === '' ? undefined : parseInt(e.target.value, 10), })}>
                            <option value="">Select</option>
                            {regiones.map((reg) => (
                                <option key={reg.CDGREG} value={reg.CDGREG}>
                                    {reg.NOME}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='table-wrapper'>
                <DataGrid
                    dataSource={store}
                    keyExpr="id"
                    showBorders
                    remoteOperations={{ paging: true, filtering: true, sorting: true }}
                    columnAutoWidth={true}
                    rowAlternationEnabled={true}
                    width="100%">
                    <FilterRow visible={false} />
                    <Paging defaultPageSize={10} />
                    <Pager
                        visible={true}
                        showNavigationButtons={true}
                        showPageSizeSelector={false}
                    />
                    <Column dataField="CDGMED" caption="CODE" />
                    <Column dataField="NOME" caption="PHYSICIAN" />
                    <Column dataField="region.CDGREG" caption="CRM" />
                    <Column dataField="especialidad.NOME" caption="SPECIALTY" />
                    <Column dataField="region.NOME" caption="REGION" />
                    <Column dataField="BAIRRO" caption="DISTRICT" />
                    <Column dataField="ZONA" caption="ZONE" />
                    <Column dataField="especialidad.CDGESP" caption="CEP" />
                </DataGrid>
            </div>
        </div>
    );
}