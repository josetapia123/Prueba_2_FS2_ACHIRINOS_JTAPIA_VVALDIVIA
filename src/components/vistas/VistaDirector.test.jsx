import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VistaDirector from './VistaDirector';

describe('Componente VistaDirector', () => {

  // Datos simulados para las props
  const proyectosMock = [

    { codigo: "PR001", nombre: "Campaña Test Director", cliente: "Cliente A", presupuesto: "$10.000.000", estado: "En ejecución" }
  ];

  const tareasMock = [
    { id: 1, especialista: "Ana Pérez", tarea: "Diseño Gráfico", proyecto: "PR001", prioridad: "Alta" }
  ];

  it('renderiza correctamente el tablero y la tabla de proyectos', () => {
    render(<VistaDirector proyectos={proyectosMock} tareas={tareasMock} />);
    // Verificación del título principal

    expect(screen.getByRole('heading', { name: /tablero del director/i })).toBeInTheDocument();
    // Verificación de datos dentro de la tabla de proyectos

    expect(screen.getByText("PR001")).toBeInTheDocument();
    expect(screen.getByText("Campaña Test Director")).toBeInTheDocument();
    expect(screen.getByText("$10.000.000")).toBeInTheDocument();
  });



  it('muestra la lista con la carga de trabajo de las tareas', () => {
    render(<VistaDirector proyectos={proyectosMock} tareas={tareasMock} />);
    // Verificación de la información de la tarea asignada
    expect(screen.getByText(/ana pérez/i)).toBeInTheDocument();
    expect(screen.getByText(/diseño gráfico/i)).toBeInTheDocument();
    expect(screen.getByText(/prioridad: alta/i)).toBeInTheDocument();

  });

});