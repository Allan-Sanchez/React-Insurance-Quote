import React from 'react';
import styled from '@emotion/styled';
import {getCapitalLetter} from '../herper';
import Result from './Result';
import PropTypes from 'prop-types';

const ResumSumary = styled.div`
    padding: 1rem;
    text-align:center;
    background-color:#EBF4FF;
    color:#2A4365;
    margin-top:1rem;
`;

const Summary = ({setValue,data}) => {

    const {year,model,plan} = data;

    if(year === '' || model === '' || plan === ''){
        return null;
    }

    return ( 
        <ResumSumary>
            <h3>Summary of the quote</h3>

            <ul>
                <li>Model: <strong>{getCapitalLetter(model)}</strong> </li>
                <li>Year: <strong> {year}</strong> </li>
                <li>Plan: <strong>{getCapitalLetter(plan)}</strong> </li>
            </ul>
            <Result setValue={setValue}/>
        </ResumSumary>
    );
}
 Summary.propTypes ={
    setValue: PropTypes.number.isRequired,
    data:PropTypes.object.isRequired
 }
export default Summary;