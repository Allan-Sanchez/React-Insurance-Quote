import React from "react";
import Header from "./components/Header";
import FormContent from "./components/Form";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  padding: 3rem;
  background-color: #fff;
`;

function App() {
  return (
    <Container>
      <Header title={"Insurance Quote"} />
      <ContainerForm>
        <FormContent/>
      </ContainerForm>
    </Container>
  );
}

export default App;
