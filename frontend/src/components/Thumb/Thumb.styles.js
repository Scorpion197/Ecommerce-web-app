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

    button {

        padding: 10px;
        color: #fff; 
        background: red;
        border: none; 
        outline: none;
        font-size: 16px;
        font-weight: bold !important;
        weight: 100px;
        height: 35px;
        border-radius: 2px;
        cursor: pointer;
    }
`;