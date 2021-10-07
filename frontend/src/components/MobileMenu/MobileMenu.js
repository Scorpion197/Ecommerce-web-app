import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
// styles 
import {Wrapper, Menu} from './MobileMenu.styles';
//hooks 
import { useState } from 'react';

const MobileMenu = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {

        setClick(!click);
    }

    return (

        <>
            <Wrapper>

                <h1 className={click? 'hidden-time-zone': 'time-zone'}> TimeZone</h1>
                <div className="icon-item" onClick={handleClick}>
                    {
                        click ? (

                            <Menu>

                                <CloseIcon className="icon" style={{color: "#fff"}}/>
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
                            )

                        : (<MenuIcon className="icon" style={{color: "#000"}}/>)
                    }
                </div>
            </Wrapper>
        </>
    )
}


export default MobileMenu;