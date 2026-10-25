# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


PROYECTO ANTIGUO (VÁLIDO HASTA EL COMMIT #7: https://github.com/josetapia123/FS2_002D_CHIRINOS_TAPIA_VALDIVIA_EVP2_DEPRECATED


# CreativaMente — Plataforma de Gestión Interna

Plataforma web desarrollada en React y Bootstrap para la gestión interna de proyectos, tareas y control presupuestario de la agencia de marketing **CreativaMente**.

---

## Autores y Colaboradores
* Vicente Valdivia
* Álvaro Chirinos
* José Tapia

---

## Tecnologías y Stack Utilizado
* React (Componentes funcionales y Hooks como `useState`)
* Bootstrap 5 & Bootstrap Icons (Diseño responsivo, tarjetas, tablas y utilidades de estilo)
* Vite (Entorno de desarrollo rápido y empaquetado)
* JavaScript (ES6+)

---

## Características Principales
* **Autenticación por Roles:** Sistema de inicio de sesión con validación de credenciales y contraseñas numéricas que redirige automáticamente a la vista correspondiente según el perfil del usuario:
  * **Administrador (`vista-admin`):** Métricas financieras generales, auditoría de campañas y distribución de presupuestos con barras de progreso.
  * **Director (`vista-director`):** Control operativo de proyectos activos, presupuestos asignados y carga de trabajo del equipo.
  * **Especialista (`vista-especialista`):** Seguimiento de tareas individuales, horas estimadas y estados de ejecución.
  * **Cliente (`vista-cliente`):** Visualización en tiempo real del estado de sus campañas de marketing contratadas.
* **Diseño Condicional del Footer:** El pie de página institucional se muestra exclusivamente en la pantalla de inicio de sesión (`Login`) y se oculta automáticamente al ingresar al sistema.

---

## Instalación y Configuración Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/josetapia123/Prueba_2_FS2_ACHIRINOS_JTAPIA_VVALDIVIA.git](https://github.com/josetapia123/Prueba_2_FS2_ACHIRINOS_JTAPIA_VVALDIVIA.git)
