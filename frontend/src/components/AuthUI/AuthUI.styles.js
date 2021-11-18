import styled from 'styled-components';

export const Wrapper = styled.div`
    
    padding-top: 4em;
    padding-bottom: 2em;
    background-color: #F0EFF2;
    background-size: 100%, cover;
    background-position: center;
    //height: 70vh;
    //position: relative;
  
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    animation: animateHeroImage 1s;
    @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Form = styled.form`
    
  width: 30%; 
  background-color: #FEFFFF;
  background-size: 100%, cover;
  background-position: center;
  position: relative;
  display: flex; 
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0 0 10px #000;

  @media screen and (min-height: 850px) {

    /*height: 55vh;*/
  }

  


  h2 {
    
    text-align: left;
    text-decoration: underline;
    font-size: 50px;
    color: #130f40;
    margin-bottom: 25px;

    @media screen and (max-width: 576px) {

      font-size: 20px;
    }

    @media screen and (max-width: 768px) {

      font-size: 30px;
    }
  }

  p{
    padding: 12px;
    font-size: 12px;
  }

  strong, a{
    color: red;
  }

`;

export const Text = styled.div`

  
  width: 50%; 
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start;
  h1 {
    
    text-align: left;
    font-size: 90px;
    color: #130f40;

    @media screen and (max-width: 576px) {

      font-size: 40px;
    }

    @media screen and (max-width: 768px) {

      font-size: 60px;
    }
  }

  h2 {
    
    text-align: left;
    text-decoration: underline;
    font-size: 60px;
    color: #130f40;

    @media screen and (max-width: 576px) {

      font-size: 20px;
    }

    @media screen and (max-width: 768px) {

      font-size: 40px;
    }
  }

  p {
    text-align: left;
    width: 90%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {

    width: 80%;
  }

  @media screen and (max-width: 768px) {

    width: 60%;
  }

  strong{
    font-size: 22px;


  }

  #price-tag{
    font-size: 20px;
    color: red;

  }

  #conditions{
    margin-top: 20px;
    font-size: 11px;
    color: #0005

  }

`;

export const Image = styled.img`

  max-width: 100%; 
  height: 100%;

  @media screen and (max-width: 576px) {

    display: none;
  }
  
  @media screen and (max-width: 768px) {

    width: 30%;
  }

`;

export const Submit = styled.input`

  width: 120px; 
  height: 40px; 
  padding: 10px;
  margin-top: 40px;
  background: #4a4a4b;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;


  :hover {

    background: red;
  }

  @media screen and (max-width: 768px) {

    margin-top: 20px;
  }
`;

export const Input = styled.input`

  
  outline: none;
  border: none;

  font-size: 25px;

  width: 60%;
  border: 0;
  padding-left: 40px;


  @media screen and (max-width: 768px) {

    margin-top: 20px;
  }

`;

export const ErrorBox = styled.div`

  
  border: 3px solid #cc0033;
  background-color: #cc003322;

  padding: 10px;

  border-radius: 5px;

  font-size: 20px;

  width: 80%;
  cursor: pointer;


  @media screen and (max-width: 768px) {

    margin-top: 20px;
  }

`;

export const InputWrapper = styled.div`

  width: 80%; 
  margin: auto;  
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;


  display: flex;


  height: 50px; 
  color: #AAA;

  border: 1px solid black;
  border-radius: 5px ;

  @media screen and (max-width: 768px) {

    margin-top: 20px;
  }

  img{
    border-right: 1px solid black;
    padding-right: 20px;

    
  }
`;