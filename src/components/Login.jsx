// src/components/Login.jsx
import React, { useState } from 'react';
import { usuariosData } from '../data/data';

export default function Login({ onLoginSuccess }) {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const username = user.trim().toLowerCase();

        // Validación: La contraseña solo debe contener números
        if (!/^[0-9]+$/.test(pass)) {
            alert("Error: La contraseña solo puede contener números.");
            return;
        }

        // Validación de credenciales
        if (usuariosData[username] && usuariosData[username].pass === pass) {
            onLoginSuccess(usuariosData[username]);
        } else {
            alert("Credenciales incorrectas. Intente nuevamente.");
        }
    };

    return (
        <div className="row justify-content-center align-items-center min-vh-100 bg-light">
            <div className="col-md-5 col-lg-4 col-sm-8">
                <div className="card shadow-lg p-4 border-0 rounded-4 bg-white">
                    <div className="text-center mb-4">
                        <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: '60px', height: '60px' }}>
                            <i className="bi bi-briefcase-fill fs-3"></i>
                        </div>
                        <h3 className="fw-bold text-dark">CreativaMente</h3>
                        <p className="text-muted small">Plataforma de Gestión Interna</p>
                    </div>
                    
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label text-muted small fw-bold">Usuario</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light border-end-0 text-muted"><i className="bi bi-person"></i></span>
                                <input 
                                    type="text" 
                                    className="form-control border-start-0 bg-light py-2" 
                                    placeholder="ej: admin, cliente, director" 
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="form-label text-muted small fw-bold">Contraseña</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light border-end-0 text-muted"><i className="bi bi-lock"></i></span>
                                <input 
                                    type="password" 
                                    className="form-control border-start-0 bg-light py-2" 
                                    placeholder="Solo números (ej: 1234)" 
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 py-2 fw-bold shadow-sm">
                            <i className="bi bi-box-arrow-in-right me-2"></i>Ingresar al Sistema
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}