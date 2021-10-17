import styled from 'styled-components';

export const Image = styled.img`

    width: 100%; 
    max-width: 720px; 
    object-fit: cover; 
    border-radius: 10px; 
    cursor: pointer; 

    :hover {

        opacity: 0.8;
    }

`;

export const Wrapper = styled.div`

    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;

    .price {

        color: red;
        margin-top: -5px;
    }

`;