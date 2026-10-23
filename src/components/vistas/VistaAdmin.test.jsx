import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VistaAdmin from './VistaAdmin';

describe('Componente VistaAdmin', () => {
  const proyectosMock = [
    { codigo: "PR001" },
    { codigo: "PR002" },
    { codigo: "PR003" }
  ];

  it('renderiza el panel de administración y calcula correctamente el total de proyectos', () => {
    render(<VistaAdmin proyectos={proyectosMock} />);
    // Título del panel
    expect(screen.getByRole('heading', { name: /panel de administración/i })).toBeInTheDocument();
    // Verificación de la métrica calculada dinámicamente mediante props
    expect(screen.getByText("3 campañas")).toBeInTheDocument();
  });
});