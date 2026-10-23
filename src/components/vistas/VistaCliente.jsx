// src/components/vistas/VistaCliente.jsx
import React from 'react';

export default function VistaCliente({ proyectos }) {
    return (
        <div className="container py-2">
            {/* Contenedor Encabezado */}
            <div className="p-4 mb-4 bg-white rounded-3 shadow-sm border-start border-5 border-info">
                <h2 className="fw-bold text-dark mb-1">
                    <i className="bi bi-speedometer2 me-2 text-info"></i>Panel del Cliente
                </h2>
                <p className="text-muted mb-0">Seguimiento en tiempo real de tus campañas de marketing contratadas.</p>
            </div>

            {/* Grilla de Contenedores Dinámicos */}
            <div className="row g-4">
                {proyectos.map((p) => (
                    <div className="col-md-6 col-lg-4" key={p.codigo}>
                        <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <span className="badge bg-light text-primary border border-primary px-2 py-1">
                                        {p.codigo}
                                    </span>
                                    <span className="badge bg-success-subtle text-success border border-success px-2 py-1">
                                        <i className="bi bi-check-circle-fill me-1"></i>{p.estado}
                                    </span>
                                </div>
                                <h5 className="card-title fw-bold text-dark">{p.nombre}</h5>
                                <p className="card-text text-muted small mb-3">
                                    <i className="bi bi-building me-1"></i>{p.cliente}
                                </p>
                            </div>
                            <div className="card-footer bg-light border-0 py-2 px-4 text-end">
                                <small className="text-primary fw-semibold cursor-pointer">
                                    Ver detalles <i className="bi bi-arrow-right"></i>
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}