import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { RecoverPasswordView } from "../../recoverPassword/recoverPasswordView";
import { InputText } from "../../../../components/InputText";
import { ButtonContent, Container, Content, Final } from "./styles";
import { Paragraph } from "../../login/loginView/styles";
import { LoginButton } from "../../../../components/Button";


export const RegisterView = ({handleCreateUser }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    
    return (
        <Content>
            <Container>
                <Paragraph>Faça seu cadastro!</Paragraph>
                <h3 style={{ margin: 0 }}>Nome:</h3>

                <InputText
                    placeholder={'Digite seu nome...'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <h3 style={{ margin: 0 }}>Email:</h3>

                <InputText
                    placeholder={'Digite seu email...'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <h3 style={{ margin: 0 }}>Senha:</h3>

                <InputText
                    placeholder={'Digite sua senha...'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
                <h3 style={{ margin: 0 }}>Confirme sua senha:</h3>

                <InputText
                    placeholder={'Confirme sua senha...'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}

                />
                <ButtonContent>
                <LoginButton
                    onClick={handleCreateUser}
                    value={"Enviar"}
                />
                </ButtonContent>
                <Final>
                <p style={{ color: 'red', margin:0 }}>{error}</p>
                <Link style={{ color: 'white', padding: 10, fontWeight: 'normal' }} to="/">Retorne à página anterior!</Link>
                </Final>

            </Container>
        </Content>
    )
}