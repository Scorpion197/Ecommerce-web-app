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

                <h1 className="time-zone"> TimeZone</h1>
                <div className="icon-item" onClick={handleClick}>
                    {
                        click ? <CloseIcon className="icon" style={{color: "#000"}}/> : <MenuIcon className="icon" style={{color: "#000"}}/>
                    }
                </div>
            </Wrapper>
        </>
    )
}


export default MobileMenu;