import { Routes, Route } from 'react-router-dom';
import HomeView from './pages/HomeView';
import MedicosView from './pages/MedicosView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/medicos" element={<MedicosView />} />
    </Routes>
  );
}

export default App;