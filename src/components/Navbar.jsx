// src/components/Navbar.jsx
import React from 'react';

export default function Navbar({ onLogout }) {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm mb-4">
            <div className="container-fluid">
                <span className="navbar-brand fw-bold text-info">
                    <i className="bi bi-layers-fill me-2"></i>CreativaMente
                </span>
                <button className="btn btn-outline-light btn-sm px-3" onClick={onLogout}>
                    <i className="bi bi-box-arrow-right me-1"></i>Cerrar Sesión
                </button>
            </div>
        </header>
    );
}