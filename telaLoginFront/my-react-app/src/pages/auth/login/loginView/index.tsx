import React, { useState, ChangeEvent, FormEvent } from "react";
import { Content, Recover, Container, Paragraph, ButtonContent } from "./styles";
import { LoginButton } from '../../../../components/Button';
import { InputText } from '../../../../components/InputText';
import axios from 'axios'

type InputTextProps = {
  type?: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLogin: any;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  loginSuccessful: boolean;
  error: string;
  handleRecoverPassword:any;
  handleRegister:any;
};

export const LoginView: React.FC<InputTextProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  error,
  handleRecoverPassword,
  handleRegister
}) => {



  return (
    <Content>
      <Container>
        <Paragraph>Faça seu login! </Paragraph>
        <InputText
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputText
          placeholder="Digite sua senha..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonContent>
          <LoginButton
            onClick={handleLogin} value={"Entrar"} />
        </ButtonContent>
        <Recover>
          <p   onClick={handleRecoverPassword} >Esqueceu sua senha?</p>
          <p   onClick={handleRegister} >Cadastre-se</p>
          <p style={{color:'red'}}>{error}</p>
        </Recover>

      </Container>
    </Content>
  );
};
