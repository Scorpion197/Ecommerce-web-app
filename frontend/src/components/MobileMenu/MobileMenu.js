import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
// styles 
import {Wrapper, Menu} from './MobileMenu.styles';

const MobileMenu = () => {


    return (

        <>
            <Wrapper>

                <h1> TimeZone</h1>
                <MenuIcon color="secondary"/>
                <Menu>

                    <Typography variant="h6" className="menu-item" component="div">
                        Home
                    </Typography>
                    <Typography variant="h6" className="menu-item" component="div">
                        Shop
                    </Typography>
                    <Typography variant="h6" className="menu-item" component="div">
                        About
                    </Typography>
                    <Typography variant="h6" className="menu-item" component="div">
                        Latest
                    </Typography>
                    <Typography variant="h6" className="menu-item" component="div">
                        Contact
                    </Typography>
                    <Typography variant="h6" className="menu-item" component="div">
                        Login
                    </Typography>

                </Menu>
            </Wrapper>
        </>
    )
}


export default MobileMenu;