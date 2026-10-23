// src/components/vistas/VistaEspecialista.jsx
import React from 'react';

export default function VistaEspecialista({ tareas }) {
    return (
        <div className="container py-2">
            {/* Header del Especialista */}
            <div className="p-4 mb-4 bg-white rounded-3 shadow-sm border-start border-5 border-warning">
                <h2 className="fw-bold text-dark mb-1">
                    <i className="bi bi-tools me-2 text-warning"></i>Espacio de Trabajo Técnico
                </h2>
                <p className="text-muted mb-0">Gestión individual de tareas, horas estimadas y entregables.</p>
            </div>

            {/* Listado en tarjetas / contenedores */}
            <div className="row g-3">
                {tareas.map((t) => (
                    <div className="col-12" key={t.id}>
                        <div className="card border-0 shadow-sm p-3 rounded-3 bg-white">
                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                <div>
                                    <span className="badge bg-warning-subtle text-warning-emphasis mb-2">
                                        <i className="bi bi-clock-history me-1"></i>{t.horas} horas estimadas
                                    </span>
                                    <h5 className="fw-bold text-dark mb-1">{t.tarea}</h5>
                                    <p className="text-muted small mb-0">Proyecto: <strong>{t.proyecto}</strong></p>
                                </div>
                                <div>
                                    <button className="btn btn-outline-primary btn-sm me-2">
                                        <i className="bi bi-play-fill me-1"></i>Iniciar
                                    </button>
                                    <span className="badge bg-primary px-3 py-2">{t.estado}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}