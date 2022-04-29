import React from "react";
import side from "../../images/side-image.jpg";
import logo from "../../images/logo.svg";

import {
  Container,
  ContentLogin,
  ContentImg,
  Camp
} from "./styles";
import Login from "../Login";

const Page: React.FC = () => {
  return (
    <Container>
      <ContentLogin>
        <Camp src={logo}/>
        <Login/>
      </ContentLogin>
      <ContentImg src={side} />
    </Container>
  );
};

export default Page;
