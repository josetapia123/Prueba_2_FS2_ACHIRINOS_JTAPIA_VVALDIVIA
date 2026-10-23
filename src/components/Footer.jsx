// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
    return (
        <footer className="cm-footer py-5 px-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-5">
                        <div className="fw-bold fs-5 text-white mb-2">
                            <i className="bi bi-layers-fill me-2"></i>CreativaMente
                        </div>
                        <p className="cm-footer-legal mb-0">
                            Plataforma de gestión interna de proyectos y campañas de marketing.
                        </p>
                    </div>
                    
                    <div className="col-6 col-lg-3">
                        <h6>Módulos</h6>
                        <ul>
                            <li>Proyectos</li>
                            <li>Tareas</li>
                            <li>Presupuestos</li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <p className="cm-footer-legal mb-0">© 2026 CreativaMente. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
