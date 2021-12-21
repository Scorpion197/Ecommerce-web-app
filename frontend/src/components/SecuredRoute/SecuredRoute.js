import React from 'react';

//react router dom
import { Route } from 'react-router-dom'; 

//helper
import Helper from '../../helpers/helper';

//components 
import HomeAfterLogin from '../HomeAfterLogin/HomeAfterLogin';

const SecuredRoute = (props) => {

    const helper = new Helper();
    const isLogged = helper.getAuthenticationStatus();

    return (

        <Route path={props.path}

    )
}


export default SecuredRoute;