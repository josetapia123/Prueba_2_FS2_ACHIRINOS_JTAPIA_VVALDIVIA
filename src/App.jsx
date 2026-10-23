// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import VistaCliente from './components/vistas/VistaCliente';
import VistaDirector from './components/vistas/VistaDirector';
import VistaEspecialista from './components/vistas/VistaEspecialista';
import VistaAdmin from './components/vistas/VistaAdmin';
import { proyectosData, tareasData } from './data/data';

export default function App() {
    const [usuarioActivo, setUsuarioActivo] = useState(null);

    const handleLoginSuccess = (datosUsuario) => {
        setUsuarioActivo(datosUsuario);
    };

    const handleLogout = () => {
        setUsuarioActivo(null);
    };

    return (
        <div className="bg-light min-vh-100">
            {usuarioActivo && <Navbar onLogout={handleLogout} />}

            <main className="container pb-5">
                {!usuarioActivo ? (
                    <Login onLoginSuccess={handleLoginSuccess} />
                ) : (
                    <div>
                        {usuarioActivo.vista === 'vista-cliente' && (
                            <VistaCliente proyectos={proyectosData} />
                        )}

                        {usuarioActivo.vista === 'vista-director' && (
                            <VistaDirector proyectos={proyectosData} tareas={tareasData} />
                        )}

                        {usuarioActivo.vista === 'vista-especialista' && (
                            <VistaEspecialista tareas={tareasData} />
                        )}

                        {usuarioActivo.vista === 'vista-admin' && (
                            <VistaAdmin proyectos={proyectosData} />
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}