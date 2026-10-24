// src/components/vistas/VistaCliente.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VistaCliente from './VistaCliente';

describe('Componente VistaCliente', () => {
  it('renderiza correctamente el título y los proyectos asignados', () => {
    const proyectosMock = [
      { codigo: "PR001", nombre: "Campaña Test", cliente: "TechStore S.A.", estado: "En ejecución" }
    ];
    render(<VistaCliente proyectos={proyectosMock} />);
    
    expect(screen.getByRole('heading', { name: /panel del cliente/i })).toBeInTheDocument();
    expect(screen.getByText(/campaña test/i)).toBeInTheDocument();
    expect(screen.getByText(/techstore s.a./i)).toBeInTheDocument();
    expect(screen.getByText(/en ejecución/i)).toBeInTheDocument();
  });
});