import React, { useRef } from "react";

import {
  Container,
  LoginHeader,
  IconLogin,
  LoginForm,
  IconEmail,
  IconSenha,
  Button,
  Label,
} from "./styles";

const Login: React.FC = () => {

  return (
    <Container>
      <LoginHeader>
        <span>
          <IconLogin />
          Faça seu login
        </span>
        <p>Entre com suas informações de cadastro.</p>
      </LoginHeader>
      <LoginForm>
        <Label className="login-info">
          E-mail
          <div>
            <IconEmail />
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </div>
        </Label>
        <Label className="login-info">
          Senha
          <div>
            <IconSenha />
            <input type="current-password" id="senha" placeholder="Digite sua senha" />
          </div>
        </Label>

        <div className="remember">
          <a href="#">Esqueci minha senha</a>
        </div>

        <Button >ENTRAR</Button>
        <p>
          Não tem uma conta? <a>Registre-se</a>
        </p>
      </LoginForm>
    </Container>
  );
};

export default Login;
