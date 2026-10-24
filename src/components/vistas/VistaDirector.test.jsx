// src/components/vistas/VistaDirector.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VistaDirector from './VistaDirector';

describe('Componente VistaDirector', () => {
  const proyectosMock = [
    { codigo: "PR001", nombre: "Campaña Test Director", cliente: "Cliente A", presupuesto: "$10.000.000", estado: "En ejecución" }
  ];

  const tareasMock = [
    { id: 1, especialista: "Ana Pérez", tarea: "Diseño Gráfico", proyecto: "PR001", prioridad: "Alta" }
  ];

  it('renderiza correctamente el tablero y la tabla de proyectos', () => {
    render(<VistaDirector proyectos={proyectosMock} tareas={tareasMock} />);
    
    expect(screen.getByText(/tablero de dirección/i)).toBeInTheDocument();
    
    // Usamos getAllByText para evitar el conflicto de elementos duplicados
    expect(screen.getAllByText("PR001")[0]).toBeInTheDocument();
    expect(screen.getByText("Campaña Test Director")).toBeInTheDocument();
  });

  it('muestra la lista con la carga de trabajo de las tareas', () => {
    render(<VistaDirector proyectos={proyectosMock} tareas={tareasMock} />);
    
    expect(screen.getByText(/ana pérez/i)).toBeInTheDocument();
    expect(screen.getByText(/diseño gráfico/i)).toBeInTheDocument();
  });
});