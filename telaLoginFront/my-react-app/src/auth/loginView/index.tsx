import React, { useState, ChangeEvent, FormEvent } from "react";
import { Content, Container, Paragraph, ButtonContent } from "./styles";
import { LoginButton } from "../../components/Button";
import { InputText } from "../../components/InputText";
import axios from 'axios'

type InputTextProps = {
  type?: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const LoginView: React.FC<InputTextProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [user, setUser] = useState(null);


  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login',
        {
          email: email,
          password: password,
        },
        {

        }
      );
      console.log(response.data.token)
      setUser(response.data.token)

    } catch (error) {
      if (!error?.response.data.token) {
        setError('Erro ao acessar o servidor');
      } else if (error.response.status == 401) {
        setError('Usuario e senha invalidos!')
      }
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setUser(null)
  }

  return (
    <Content>
      {user == null ? (

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
              onClick={handleLogin} />
          </ButtonContent>
          <p>{error}</p>
        </Container>
      ) : (
        <div>
          <h2>Usuario autenticado!</h2>
          <button style={{ background: 'White', color: 'black', borderRadius: 7, maxWidth: '20vw' }}
            onClick={handleLogout}>
            Sair
          </button>
        </div>

      )}
    </Content>
  );
};
