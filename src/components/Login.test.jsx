// src/components/Login.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Login from './Login';

describe('Componente Login', () => {
    
    // 1. Prueba de renderizado inicial
    it('se renderiza correctamente con sus campos y botón', () => {
        render(<Login onLoginSuccess={() => {}} />);
        
        expect(screen.getByRole('heading', { name: /iniciar sesión/i })).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/usuario/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/contraseña/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /ingresar/i })).toBeInTheDocument();
    });

    // 2. Prueba de validación de contraseña numérica (Mock de alert)
    it('muestra una alerta si la contraseña contiene letras', async () => {
        const user = userEvent.setup();
        // Simulamos la función alert del navegador para evitar errores en el test
        window.alert = vi.fn();

        render(<Login onLoginSuccess={() => {}} />);

        // Escribimos un usuario y una contraseña inválida (con letras)
        await user.type(screen.getByPlaceholderText(/usuario/i), 'admin');
        await user.type(screen.getByPlaceholderText(/contraseña/i), '1234a');
        await user.click(screen.getByRole('button', { name: /ingresar/i }));

        // Verificamos que se haya llamado a la alerta con el mensaje correcto
        expect(window.alert).toHaveBeenCalledWith('Error: La contraseña solo puede contener números.');
    });

    // 3. Prueba de éxito con credenciales correctas
    it('ejecuta onLoginSuccess con credenciales correctas', async () => {
        const user = userEvent.setup();
        const handleLoginSuccess = vi.fn(); // Función espía (mock)

        render(<Login onLoginSuccess={handleLoginSuccess} />);

        // Escribimos credenciales válidas
        await user.type(screen.getByPlaceholderText(/usuario/i), 'admin');
        await user.type(screen.getByPlaceholderText(/contraseña/i), '1234');
        await user.click(screen.getByRole('button', { name: /ingresar/i }));

        // Verificamos que la función de éxito fue llamada exactamente una vez
        expect(handleLoginSuccess).toHaveBeenCalledTimes(1);
    });
});