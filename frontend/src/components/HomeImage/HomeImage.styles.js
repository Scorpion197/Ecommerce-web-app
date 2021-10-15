import styled from 'styled-components';

export const Wrapper = styled.div`
    
    background-color: #F0EFF2;
    background-size: 100%, cover;
    background-position: center;
    height: 70vh;
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
`;

export const Text = styled.div`

  
  width: 40%; 
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

  p {
    text-align: left;
    width: 90%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin-top: -30px;
  }

  @media screen and (max-width: 768px) {

    width: 80%;
  }

  @media screen and (max-width: 768px) {

    width: 60%;
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