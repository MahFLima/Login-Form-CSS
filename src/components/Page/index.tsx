import React from "react";
import side from "../../images/side-image.jpg";

import {
  Container,
  ContentLogin,
  ContentImg,
} from "./styles";
import Login from "../Login";

const Page: React.FC = () => {
  return (
    <Container>
      <ContentLogin>
        <Login/>
      </ContentLogin>
      <ContentImg src={side} />
    </Container>
  );
};

export default Page;
