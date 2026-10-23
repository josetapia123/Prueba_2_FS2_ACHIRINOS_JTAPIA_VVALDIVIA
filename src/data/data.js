// src/data/data.js

// Credenciales y roles de usuario
export const usuariosData = {
    "cliente": { pass: "1234", vista: "vista-cliente", nombre: "TechStore S.A." },
    "director": { pass: "1234", vista: "vista-director", nombre: "Director de Proyectos" },
    "especialista": { pass: "1234", vista: "vista-especialista", nombre: "Ana Pérez (Especialista)" },
    "admin": { pass: "1234", vista: "vista-admin", nombre: "Administrador General" }
};

// Catálogo de Proyectos de la agencia
export const proyectosData = [
    { codigo: "PR001", nombre: "Campaña Social Media TechStore", cliente: "TechStore S.A.", tipo: "Redes Sociales", presupuesto: "$12.000.000", inicio: "2026-01-15", fin: "2026-03-15", estado: "En ejecución" },
    { codigo: "PR002", nombre: "Branding ModaHoy", cliente: "ModaHoy", tipo: "Branding", presupuesto: "$8.500.000", inicio: "2026-02-01", fin: "2026-04-30", estado: "Planificado" },
    { codigo: "PR003", nombre: "Campaña PPC Alimentos Sanos", cliente: "Alimentos Sanos", tipo: "Publicidad", presupuesto: "$5.000.000", inicio: "2026-01-10", fin: "2026-06-30", estado: "En ejecución" },
    { codigo: "PR004", nombre: "Estrategia de Contenido Turismo Sur", cliente: "Turismo Sur", tipo: "Contenido", presupuesto: "$15.000.000", inicio: "2026-03-01", fin: "2026-08-31", estado: "Planificado" }
];

// Tareas asignadas al equipo
export const tareasData = [
    { id: 1, especialista: "Ana Pérez", tarea: "Diseñar piezas gráficas", proyecto: "PR001", estado: "Pendiente", prioridad: "Alta", horas: 8 },
    { id: 2, especialista: "Carlos Soto", tarea: "Redactar copys redes sociales", proyecto: "PR002", estado: "Pendiente", prioridad: "Media", horas: 5 },
    { id: 3, especialista: "María Rojas", tarea: "Configurar campaña PPC", proyecto: "PR003", estado: "Completada", prioridad: "Alta", horas: 6 },
    { id: 4, especialista: "Jorge Díaz", tarea: "Optimización SEO y analítica", proyecto: "PR004", estado: "Pendiente", prioridad: "Baja", horas: 3 }
];