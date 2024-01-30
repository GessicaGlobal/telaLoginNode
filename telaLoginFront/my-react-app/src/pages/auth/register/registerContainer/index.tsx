import React, { useState } from "react"
import { RegisterView } from "../registerView";
import { useAuth } from "../../../../hooks/useAuth";


export const RegisterContainer = ({email, password, name, confirmPassword, setError}) => {
    const { newUser } = useAuth();

    const handleCreateUser = async (e) => {
        e.preventDefault()
        console.log('cliquei')
        const signUpPayload = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        try {
            const token = await newUser(signUpPayload);
           alert('Usuário criado com sucesso!')
           //colocar um toast aqui
        } catch (error) {
            // navigate('/');
            console.log('erro inesperado')
            setError('Credenciais inválidas!')
        }

    }

    <RegisterView
        handleCreateUser={handleCreateUser}
    />
}