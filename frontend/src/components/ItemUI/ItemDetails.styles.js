import styled from 'styled-components';

export const Wrapper = styled.div`
    
    background-color: #F0EFF2;
    background-size: 100%, cover;
    background-position: center;
    height: 55vh;
    position: relative;
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

  .title {

    text-decoration: none;
  }
`;

export const IntraWrapper = styled.div`
    
  width: 80%; 
  background-color: #F0EFF2;
  background-size: 100%, cover;
  background-position: center;
  height: 55vh;
  position: relative;
  display: flex; 
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

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

export const Button = styled.button`

  width: 120px; 
  height: 40px; 
  padding: 10px;
  margin-top: 40px;
  margin-left: 40px;
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