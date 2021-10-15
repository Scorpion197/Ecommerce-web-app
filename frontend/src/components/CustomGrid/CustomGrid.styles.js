import styled from 'styled-components';

export const Wrapper = styled.div`


    width: 80%;
    max-width: 1848px; 
    margin: 100px auto; 
    padding: 0 20px;

    h1 {

        font-size: 48px; 
    }

    media screen and (max-width: 576px) {

        h1 {

            font-size: 25px; 
        }

    }
`;
export const GridWrapper = styled.div`

    width: 80%;
    height: auto;
    margin: 0px auto;
`;

export const Content = styled.div`

    
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
    grid-gap: 2rem;
    
`;

