import styled, { css } from "styled-components";
import { EmailOutline, LockAlt, LogIn } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--form-background);
  padding: 50px;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 0;
    background: var(--background);
  }

  @media (max-width: 568px) {
    padding: 0;
    width: 90%;
  }
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > span {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    color: var(--text-title);
  }
  > p {
    font-size: 16px;
    font-weight: 500, Medium;
    font-family: Roboto, sans-serif;
  }
`;
export const IconLogin = styled(LogIn)`
  width: 24px;
  height: 24px;
  fill: var(--primary-color);
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .login-info {
    display: flex;
    flex-direction: column;
    gap: 5px;

    font-size: 16px;
    font-weight: 500, Medium;

    > div {
      width: 100%;
      height: 44px;
      position: relative;
      display: flex;
      align-items: center;

      > input {
        width: 100%;
        height: 100%;
        background: transparent;
        padding: 14px 37px;
        font-size: 14px;
        font-weight: 400;
        border: 1px solid #868686;
        border-radius: 4px;

        &:focus {
          border: 1px solid #ffc632 !important;
          outline: none;
        }
      }
    }
  }

  .remember {
    display: flex;
    justify-content: space-between;
    
    >label{
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 400;
      font-family: Roboto, sans-serif;
    }

    >label input[type="checkbox"] {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height:1px;
      overflow: hidden;
      position: absolute;
      white-space:nowrap;
      width: 1px;
    }

    .checkbox{
      display: inline-block;
      height: 20px;
      width: 20px;
      background: transparent;
      border: 1px solid grey;
      border-radius: 5px;
      margin-right: 4px;
    }
    > a {
      font-size: 14px;
      font-weight: 600, Semi Bold;
      color: var(--primary-color);
      text-decoration: none;
    }
  }

  > p {
    text-align: center;
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 400;

    > a {
      color: var(--primary-color);
      text-decoration: none;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 51px;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-color);

  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #473404;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const IconCSS = css`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 12px;
`;

export const IconEmail = styled(EmailOutline)`
  ${IconCSS}
`;
export const IconSenha = styled(LockAlt)`
  ${IconCSS}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 16px;
  font-weight: 500, Medium;

  .active{
    background: black !important;
  }

  > div {
    width: 100%;
    height: 44px;
    position: relative;
    display: flex;
    align-items: center;

    > input {
      width: 100%;
      height: 100%;
      background: transparent;
      padding: 14px 37px;
      font-size: 14px;
      font-weight: 400;
      border: 1px solid #868686;
      border-radius: 4px;

      &:focus {
        border: 1px solid #ffc632 !important;
        outline: none;
      }
    }
  }
`;
