import { usePreviousProps } from '@mui/utils';
import React from 'react';

//react router dom
import { Route, Redirect } from 'react-router-dom'; 

//helper
import Helper from '../../helpers/helper';

//components 
import HomeAfterLogin from '../HomeAfterLogin/HomeAfterLogin';

const SecuredRoute = (props) => {

    const helper = new Helper();
    const isLogged = helper.getAuthenticationStatus();

    return (

        <Route path={props.path} render={data => isLogged ? (
            <props.component {...data}></props.component>
        ): (<Redirect to ={{pathname: '/login'}}></Redirect>)}></Route>

    )
}


export default SecuredRoute;