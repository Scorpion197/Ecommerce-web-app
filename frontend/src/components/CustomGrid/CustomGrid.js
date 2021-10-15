import React from 'react'; 
import {Wrapper, Content} from './CustomGrid.styles';

const CustomGrid = ({header, children}) => {


    return (

        <Wrapper>
            <h1> { header }</h1>
            <Content> { Children } </Content>
        </Wrapper>

    )
}

export default CustomGrid;
