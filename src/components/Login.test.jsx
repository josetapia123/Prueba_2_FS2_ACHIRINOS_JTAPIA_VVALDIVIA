// src/components/Login.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Login from './Login';

describe('Componente Login', () => {
    
    it('se renderiza correctamente con sus campos y botón', () => {
        render(<Login onLoginSuccess={() => {}} />);
        
        // Coincidencia flexible usando expresiones regulares para los nuevos textos
        expect(screen.getByRole('heading', { name: /creativamente/i })).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/ej: admin/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/solo números/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /ingresar al sistema/i })).toBeInTheDocument();
    });

    it('muestra una alerta si la contraseña contiene letras', async () => {
        const user = userEvent.setup();
        window.alert = vi.fn();

        render(<Login onLoginSuccess={() => {}} />);

        // Simulación de interacción con los campos actualizados
        await user.type(screen.getByPlaceholderText(/ej: admin/i), 'admin');
        await user.type(screen.getByPlaceholderText(/solo números/i), '1234a');
        await user.click(screen.getByRole('button', { name: /ingresar al sistema/i }));

        expect(window.alert).toHaveBeenCalledWith('Error: La contraseña solo puede contener números.');
    });

    it('ejecuta onLoginSuccess con credenciales correctas', async () => {
        const user = userEvent.setup();
        const handleLoginSuccess = vi.fn();

        render(<Login onLoginSuccess={handleLoginSuccess} />);

        await user.type(screen.getByPlaceholderText(/ej: admin/i), 'admin');
        await user.type(screen.getByPlaceholderText(/solo números/i), '1234');
        await user.click(screen.getByRole('button', { name: /ingresar al sistema/i }));

        expect(handleLoginSuccess).toHaveBeenCalledTimes(1);
    });
});