// src/components/vistas/VistaDirector.jsx
import React from 'react';

export default function VistaDirector({ proyectos, tareas }) {
    return (
        <div className="container py-2">
            {/* Encabezado Principal */}
            <div className="p-4 mb-4 bg-success text-white rounded-3 shadow">
                <h2 className="fw-bold mb-1">
                    <i className="bi bi-kanban me-2"></i>Tablero de Dirección
                </h2>
                <p className="mb-0 text-white-50">Control de operaciones, asignaciones de presupuesto y tareas del equipo.</p>
            </div>

            {/* Contenedor 1: Tabla de Proyectos */}
            <div className="card border-0 shadow-sm rounded-3 mb-4">
                <div className="card-header bg-white py-3 border-0">
                    <h5 className="fw-bold text-dark mb-0">
                        <i className="bi bi-folder-fill me-2 text-success"></i>Proyectos Activos
                    </h5>
                </div>
                <div className="table-responsive px-3 pb-3">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Cliente</th>
                                <th>Presupuesto</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proyectos.map((p) => (
                                <tr key={p.codigo}>
                                    <td><span className="fw-bold text-secondary">{p.codigo}</span></td>
                                    <td className="fw-semibold text-dark">{p.nombre}</td>
                                    <td className="text-muted">{p.cliente}</td>
                                    <td className="fw-bold text-success">{p.presupuesto}</td>
                                    <td>
                                        <span className="badge bg-secondary-subtle text-secondary px-3 py-2 rounded-pill">
                                            {p.estado}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Contenedor 2: Carga de Trabajo del Equipo */}
            <div className="card border-0 shadow-sm rounded-3">
                <div className="card-header bg-white py-3 border-0">
                    <h5 className="fw-bold text-dark mb-0">
                        <i className="bi bi-people-fill me-2 text-primary"></i>Carga de Trabajo y Tareas
                    </h5>
                </div>
                <div className="card-body p-0">
                    <div className="list-group list-group-flush">
                        {tareas.map((t) => (
                            <div className="list-group-item p-3 d-flex justify-content-between align-items-center" key={t.id}>
                                <div>
                                    <h6 className="mb-1 fw-bold text-dark">
                                        <i className="bi bi-person-badge me-2 text-primary"></i>{t.especialista}
                                    </h6>
                                    <p className="mb-0 text-muted small">{t.tarea} — <span className="fw-semibold">{t.proyecto}</span></p>
                                </div>
                                <span className={`badge ${t.prioridad === 'Alta' ? 'bg-danger' : 'bg-warning text-dark'} px-3 py-2`}>
                                    Prioridad {t.prioridad}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}