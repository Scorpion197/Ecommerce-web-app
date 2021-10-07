import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
// styles 
import {Wrapper, Menu} from './MobileMenu.styles';

const MobileMenu = () => {


    return (

        <>
            <Wrapper>

                <h1 className="time-zone"> TimeZone</h1>
                <MenuIcon className="icon" style={{color: "#000"}}/>
            </Wrapper>
        </>
    )
}


export default MobileMenu;