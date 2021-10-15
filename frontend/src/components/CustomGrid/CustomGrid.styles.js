import styled from 'styled-components';

export const Wrapper = styled.div`

    max-width: 1848px; 
    margin: 0 auto; 
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

export const Content = styled.div`

    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
`;

