import React,{useState} from "react";
import Header from "./components/Header";
import FormContent from "./components/Form";
import Summary from "./components/Summary";
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

    const  [summary , getSummary]= useState({
      value:0,
      data:{
        model:'',
        year:'',
        plan:''
      }
    });

    const {value,data} = summary;
  return (
    <Container>
      <Header title={"Insurance Quote"} />
      <ContainerForm>
        <FormContent 
          getSummary={getSummary}
        />
        <Summary 
        setValue={value}
        data={data}
        />
      </ContainerForm>
    </Container>
  );
}

export default App;
