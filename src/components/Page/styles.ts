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
  position: relative;
`;

export const ContentImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Camp = styled.img`
  width: 115px;
  height: 28px;
  position: absolute;
  top: 20px;
  left: 20px;
`
