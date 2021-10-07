import styled from 'styled-components'

export const Wrapper = styled.div`

    display : flex; 
    flex-direction: row; 
    align-items: center; 
    justify-content: space-between;

    .time-zone {

        color: red;
    }

    .hidden-time-zone {

        display: none;
    }

    .icon {

        margin-right: 20px;
        width: 30px; 
        height: 30px;
    }

`;

export const Menu = styled.div`

    display: block; 
    background: #4c4c4c;;
    padding: 10px 10px;
    width: 57vh;
    height: 300px;
    text-align: left;

    .menu-item {

        font-size: 16px;
        margin: 10px 10px; 
        color: #fff;
        cursor: pointer;

        :hover {

            background: #fff; 
            color: #4c4c4c;
        }

    }
    
`;



