// src/components/vistas/VistaEspecialista.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VistaEspecialista from './VistaEspecialista';

describe('Componente VistaEspecialista', () => {
  const tareasMock = [
    { id: 101, tarea: "Redacción de Copywriting", proyecto: "PR002", horas: 6, estado: "En proceso" }
  ];

  it('renderiza el título y las tareas asignadas con sus detalles', () => {
    render(<VistaEspecialista tareas={tareasMock} />);
    
    expect(screen.getByRole('heading', { name: /espacio de trabajo técnico/i })).toBeInTheDocument();
    expect(screen.getByText("Redacción de Copywriting")).toBeInTheDocument();
    expect(screen.getByText(/6 horas estimadas/i)).toBeInTheDocument();
    expect(screen.getByText("En proceso")).toBeInTheDocument();
  });
});