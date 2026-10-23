import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VistaCliente from './VistaCliente';

describe('Componente VistaCliente', () => {

  it('renderiza correctamente el título y los proyectos asignados', () => {
    // Datos simulados (mocks) para las props
    const proyectosMock = [
      { codigo: "PR001", nombre: "Campaña Test", cliente: "TechStore S.A.", estado: "En ejecución" }

    ];
    render(<VistaCliente proyectos={proyectosMock} />);
    // Verificamos que el encabezado del cliente esté presente

    expect(screen.getByRole('heading', { name: /bienvenido cliente/i })).toBeInTheDocument();
    // Verificamos que la información del proyecto mock se muestre en pantalla
    expect(screen.getByText(/campaña test/i)).toBeInTheDocument();
    expect(screen.getByText(/techstore s.a./i)).toBeInTheDocument();
    expect(screen.getByText(/en ejecución/i)).toBeInTheDocument();

  });

});