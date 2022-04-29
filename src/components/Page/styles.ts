import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background);
  display: flex;
`;

export const ContentLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 1024px) {
    display: none;
  }
`;
