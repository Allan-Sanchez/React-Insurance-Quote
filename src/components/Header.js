import React from 'react';
import styled from '@emotion/styled';

const  ContentHeader = styled.header`
    background-color:#319795;
    padding:10px;
    font-weight:bold;
    color:#fff;
`;

const TextHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    text-align: center;
    font-family: 'Slabo 27px',serif;
`;

const Header = ({title}) => {
    return ( 
        <ContentHeader>
            <TextHeader>{title}</TextHeader>
        </ContentHeader>
     );
}
 
export default Header;