// src/components/vistas/VistaAdmin.jsx
import React from 'react';

export default function VistaAdmin({ proyectos }) {
    return (
        <div className="container py-2">
            {/* Header del Administrador */}
            <div className="p-4 mb-4 bg-danger text-white rounded-3 shadow">
                <h2 className="fw-bold mb-1">
                    <i className="bi bi-shield-lock-fill me-2"></i>Panel de Administración General
                </h2>
                <p className="mb-0 text-white-50">Resumen financiero, auditoría de campañas y control de recursos.</p>
            </div>

            {/* Contenedores de KPIs Métricos */}
            <div className="row g-4 mb-4">
                <div className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm p-4 rounded-3 bg-white h-100">
                        <div className="d-flex align-items-center">
                            <div className="bg-primary-subtle text-primary p-3 rounded-circle me-3">
                                <i className="bi bi-folder-check fs-2"></i>
                            </div>
                            <div>
                                <h6 className="text-muted mb-1 small fw-bold">PROYECTOS ACTIVOS</h6>
                                <h3 className="fw-bold text-dark mb-0">{proyectos.length} Campañas</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm p-4 rounded-3 bg-white h-100">
                        <div className="d-flex align-items-center">
                            <div className="bg-success-subtle text-success p-3 rounded-circle me-3">
                                <i className="bi bi-currency-dollar fs-2"></i>
                            </div>
                            <div>
                                <h6 className="text-muted mb-1 small fw-bold">SALUD FINANCIERA</h6>
                                <h3 className="fw-bold text-success mb-0">Óptima (100%)</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card border-0 shadow-sm p-4 rounded-3 bg-white h-100">
                        <div className="d-flex align-items-center">
                            <div className="bg-warning-subtle text-warning p-3 rounded-circle me-3">
                                <i className="bi bi-exclamation-triangle fs-2"></i>
                            </div>
                            <div>
                                <h6 className="text-muted mb-1 small fw-bold">ALERTAS</h6>
                                <h3 className="fw-bold text-dark mb-0">0 Desviaciones</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenedor Banner de Estado */}
            <div className="alert alert-success border-0 shadow-sm d-flex align-items-center p-3 rounded-3" role="alert">
                <i className="bi bi-check-circle-fill fs-4 me-3"></i>
                <div>
                    <strong>Sistema Estable:</strong> Todas las operaciones de la agencia CreativaMente se están ejecutando dentro del margen presupuestario asignado.
                </div>
            </div>
        </div>
    );
}