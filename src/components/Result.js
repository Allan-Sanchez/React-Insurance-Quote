import React from 'react';
import styled from '@emotion/styled';


const DefaultP = styled.p`
    margin-top:1rem;
    padding:1rem;
    text-align:center;
    color:#A0AEC0;
`;

const ContainerTotal = styled.div`
    display:flex;
    justify-content:center;
    margin-top:1rem;
    padding:1rem;
    text-align:center;
    color:#2A4365;
`;

const BoxTotal = styled.div`
    background-color:#BEE3F8;
    border-radius:10px;
    padding: 1rem;
    color:#44337A;
`;

const Result = ({setValue}) => {
    return ( 
        (setValue === 0)
            ? <DefaultP>Please, Fill input year, model, plan</DefaultP>
            :   <ContainerTotal>
                <BoxTotal>
                    The total is : <strong>{setValue}</strong>
                </BoxTotal>
            </ContainerTotal>
     );
}
 
export default Result;