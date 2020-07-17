import React ,{useState}from "react";
import styled from '@emotion/styled';
import {getDiferentYear,getCalcModel,getPlan} from '../herper';



const Envase = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items:center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance:none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #319795;
    font-size:16px;
    width:100%;
    padding:1rem;
    color:#fff;
    text-transform: uppercase;
    font-weight:bold;
    border:none;
    transition: background-color 3.s ease;
    margin-top: 2rem;

    &:hover{
        background-color:#38B2AC;
        cursor: pointer;
    }
`;

const Error = styled.div`
  background-color:#FC8181;
  color:white;
  padding:1rem;
  width:90%;
  font-size:20px;
  text-align:center;
  margin-bottom: 2rem;
`;



const FormContent = ({getSummary}) => {

    const [data, setData] = useState({
        model:'',
        plan:'',
        year:''
    });

    const [error, setError] = useState(false);

    const {model, plan, year} = data;

    const getInformation = e =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        
      }
    const handleQuote = (e)=>{
      e.preventDefault();
      
      if (model.trim() === '' || plan.trim() === '' || year.trim() === '' ) {
        setError(true);
        return;                                                                                     
      }

      setError(false);
      let base = 2000;

      // ANCHOR get diferent year
      const diferentYear = getDiferentYear(year);

      // ANCHOR for each year, there is subtract the 3%
      base -=((diferentYear * 3)* base)/100;
      
      // ANCHOR American 15% Asian 5% European 30%
      base = getCalcModel(model) * base;

      const setPlane = getPlan(plan);
      base = parseFloat(setPlane * base).toFixed(2);

      getSummary({
        value:base,
        data
      });
    };

  return (
    <form onSubmit={handleQuote}>
      {error ?<Error>Please, fill each input the of form</Error>  :null}
      <Envase>
        <Label>Model</Label>

        <Select
            name="model"
            value={model}
            onChange={getInformation}>
          <option value="">--Select--</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Envase>

      <Envase>
        <Label >Year</Label>

        <Select name="year" value={year} onChange={getInformation}>
          <option value="">-- Select--</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Envase>

      <Envase>
          <Label>Plan</Label>
          <InputRadio type="radio" name="plan" checked={plan === "basic" } onChange={getInformation} value="basic"/>Basic
          <InputRadio type="radio" name="plan" checked={plan === "complete"} onChange={getInformation} value="complete"/>Complete
      </Envase>
      <Button type="submit">Quote</Button>
    </form>
  );
};

export default FormContent;
