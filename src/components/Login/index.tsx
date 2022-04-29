import React, { useRef, useState } from "react";
import { animated, useSpring } from 'react-spring'

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
  const [isChecked, setIsChecked] = useState(false);
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? '#ffc632' : "grey",
    borderColor: isChecked ? '#ffc632' : "grey"
  })

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
            <input type="email" id="email" placeholder="Digite seu e-mail" />
          </div>
        </Label>
        <Label className="login-info">
          Senha
          <div>
            <IconSenha />
            <input
              type="current-password"
              id="senha"
              placeholder="Digite sua senha"
            />
          </div>
        </Label>

        <div className="remember">
          <label>
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <animated.svg
              style={checkboxAnimationStyle}
              className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
              aria-hidden="true"
              viewBox="0 0 15 11"
              fill="none"
            >
              <animated.path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={isChecked ? "#24221f" : "none"}
              />
            </animated.svg>
            Lembre-me
          </label>
          <a href="#">Esqueci minha senha</a>
        </div>

        <Button>ENTRAR</Button>
        <p>
          Não tem uma conta? <a href="#">Registre-se</a>
        </p>
      </LoginForm>
    </Container>
  );
};

export default Login;
