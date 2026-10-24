// src/components/vistas/VistaAdmin.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VistaAdmin from './VistaAdmin';

describe('Componente VistaAdmin', () => {
  const proyectosMock = [
    { codigo: "PR001", nombre: "Campaña A", cliente: "Cliente A", tipo: "Redes", presupuesto: "$5.000.000", estado: "En ejecución" },
    { codigo: "PR002", nombre: "Campaña B", cliente: "Cliente B", tipo: "SEO", presupuesto: "$3.000.000", estado: "Planificado" },
    { codigo: "PR003", nombre: "Campaña C", cliente: "Cliente C", tipo: "PPC", presupuesto: "$2.000.000", estado: "En ejecución" }
  ];

  it('renderiza el panel de administración y calcula correctamente el total de proyectos', () => {
    render(<VistaAdmin proyectos={proyectosMock} />);
    
    expect(screen.getByRole('heading', { name: /panel de administración general/i })).toBeInTheDocument();
    expect(screen.getByText("3 campañas")).toBeInTheDocument();
    expect(screen.getByText("Campaña A")).toBeInTheDocument();
  });
});