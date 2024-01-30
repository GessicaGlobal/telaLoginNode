import React, { useEffect, useState } from 'react'
import { LoginView } from '../loginView'
import { useAuth } from '../../../../hooks/useAuth';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContainer } from '../../../Users/userContainer';
import { AdminContainer } from '../../../Admin/adminContainer/index';

interface SignInPayload {
    username: string;
    password: string;
}

// Definindo um tipo para a resposta da função signIn
interface SignInResponse {
    status: number;
}
export const LoginContainer = () => {
    const [error, setError] = useState<string>('');

    const [loginSuccessful, setLoginSuccessful] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        // Verifique se há um token de acesso no localStorage ao iniciar o componente
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setLoginSuccessful(true);

        } else {
            setLoginSuccessful(false);

        }
    }, []);
    const handleRegister = () => {
        navigate('/api/login/newUser');
    }

    const handleRecoverPassword = () => {
        navigate('/api/login/password');
    }
    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();


        const signInPayload = {
            email: email,
            password,
        };
        try {
         
            
            const token = await signIn(signInPayload);
            setLoginSuccessful(true);
            
        //    <Outlet />
           navigate('users/*');
        } catch (error) {
            setLoginSuccessful(false)
            navigate('/');
            console.log('erro inesperado')
            setError('Credenciais inválidas!')
        }
    }


    const handleLogout = async (e) => {
        e.preventDefault();
        navigate('/')
    }
    return (
        <LoginView
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleLogin={(e) => handleLogin(e)}
            loginSuccessful={loginSuccessful} placeholder={''} value={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.');
            }}
            error={error}
            handleRegister={handleRegister}
            handleRecoverPassword={handleRecoverPassword}
        />
    )

}