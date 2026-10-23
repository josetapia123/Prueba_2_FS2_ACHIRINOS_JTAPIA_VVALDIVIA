// src/components/vistas/VistaAdmin.jsx
import React from 'react';

// "$12.000.000" -> 12000000 (tolera datos incompletos)
const aNumero = (valor) => Number(String(valor ?? '').replace(/\D/g, '')) || 0;
const aMoneda = (n) => `$${n.toLocaleString('es-CL')}`;

export default function VistaAdmin({ proyectos }) {
    const total = proyectos.reduce((acc, p) => acc + aNumero(p.presupuesto), 0);
    const enEjecucion = proyectos.filter((p) => p.estado === 'En ejecución').length;

    const indicadores = [
        { etiqueta: 'Proyectos activos', valor: `${proyectos.length} campañas`, nota: 'Registradas en la agencia' },
        { etiqueta: 'Presupuesto total', valor: aMoneda(total), nota: 'Suma de todos los proyectos' },
        { etiqueta: 'En ejecución', valor: `${enEjecucion} de ${proyectos.length}`, nota: 'Campañas en curso' },
        { etiqueta: 'Alertas', valor: '0 desviaciones', nota: 'Sin incidencias abiertas' },
    ];

    return (
        <div className="container py-2">
            {/* Encabezado compacto con estado del sistema */}
            <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 pb-3 mb-4 border-bottom">
                <div>
                    <h2 className="fw-bold mb-1">Panel de Administración General</h2>
                    <p className="text-muted mb-0">Resumen financiero, auditoría de campañas y control de recursos.</p>
                </div>
                <span className="badge bg-success-subtle text-success border border-success px-3 py-2">
                    Sistema estable
                </span>
            </div>

            {/* Indicadores */}
            <div className="row g-3 mb-4">
                {indicadores.map((i) => (
                    <div className="col-sm-6 col-xl-3" key={i.etiqueta}>
                        <div className="card h-100 p-3">
                            <span className="text-muted small fw-semibold text-uppercase mb-2">{i.etiqueta}</span>
                            <h3 className="fw-bold mb-1 fs-4">{i.valor}</h3>
                            <small className="text-muted">{i.nota}</small>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row g-3">
                {/* Auditoría de campañas */}
                <div className="col-lg-8">
                    <div className="card h-100">
                        <div className="card-header bg-transparent py-3">
                            <h5 className="fw-bold mb-0">Auditoría de campañas</h5>
                        </div>
                        <div className="table-responsive px-3 pb-3">
                            <table className="table table-hover align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Campaña</th>
                                        <th>Tipo</th>
                                        <th className="text-end">Presupuesto</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {proyectos.map((p) => (
                                        <tr key={p.codigo}>
                                            <td className="fw-bold text-secondary">{p.codigo}</td>
                                            <td>
                                                <div className="fw-semibold">{p.nombre}</div>
                                                <small className="text-muted">{p.cliente}</small>
                                            </td>
                                            <td className="text-muted">{p.tipo}</td>
                                            <td className="text-end fw-semibold">{p.presupuesto}</td>
                                            <td>
                                                <span className="badge bg-secondary-subtle text-secondary px-2 py-1">{p.estado}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Distribución del presupuesto */}
                <div className="col-lg-4">
                    <div className="card h-100">
                        <div className="card-header bg-transparent py-3">
                            <h5 className="fw-bold mb-0">Distribución del presupuesto</h5>
                        </div>
                        <div className="card-body">
                            {proyectos.map((p) => {
                                const porcentaje = total ? Math.round((aNumero(p.presupuesto) / total) * 100) : 0;
                                return (
                                    <div className="mb-3" key={p.codigo}>
                                        <div className="d-flex justify-content-between small mb-1">
                                            <span className="fw-semibold">{p.codigo}</span>
                                            <span className="text-muted">{porcentaje}%</span>
                                        </div>
                                        <div className="progress" style={{ height: '6px' }} role="progressbar" aria-label={`Presupuesto ${p.codigo}`} aria-valuenow={porcentaje} aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-primary" style={{ width: `${porcentaje}%` }}></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
