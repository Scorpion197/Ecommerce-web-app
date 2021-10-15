import React from 'react'; 
import {Wrapper, Content, GridWrapper} from './CustomGrid.styles';

const CustomGrid = ({header, children}) => {


    return (

        <Wrapper>
            <h1> { header }</h1>
            <GridWrapper>
                <Content> { children} </Content>
            </GridWrapper>
        </Wrapper>

    )
}

export default CustomGrid;
