import { Link } from 'react-router-dom';

export default function HomeView() {
    return (
        <div style={{ padding: 40 }}>
            <h1>Bienvenido</h1>
            <p>Haz clic en el botón para ver el listado de médicos.</p>
            <Link to="/medicos">
                <button>Ir al listado de médicos</button>
            </Link>
        </div>
    );
}