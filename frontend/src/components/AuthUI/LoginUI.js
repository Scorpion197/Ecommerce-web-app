import React, {useState, useEffect } from 'react'; 

//components 
import MobileMenu from '../MobileMenu/MobileMenu';
import Navbar from '../Navbar/Navbar';
import { Link, Redirect } from 'react-router-dom';

//styles
import {Wrapper, Text, InputWrapper, Submit, Form, Input, ErrorBox} from './AuthUI.styles';

// hooks 
import API from '../../API';

//helpers
import Helper from '../../helpers/helper';


const LoginUI = () => {

    const [showMobileMenu, setMobileMenu] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [requestStatus, setRequestStatus] = useState(false);
    const [redirect, handleRedirection] = useState(false);
    
    const helper = new Helper();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleForm = async(event)=>{
        event.preventDefault();

        if (email.length < 4 || password.length < 6) {
            setErrorMessage("Username/Email or password Invalid");
            setError(true);

            return;
        }
        
              //Send request
          let data = await API.login(email, password);

          if(data.response.status == 'failed'){
    
              //Hmmmmmm, this should be done on the backend side
            if(data.detail)
                setErrorMessage(data.detail);
            else if (data.email)
                setErrorMessage(data.email[0]);
            else if (data.username)
                setErrorMessage(data.username[0]);
            else
                setErrorMessage('Invalid email/password');

            console.log(data);
    
    
            setError(true); 
    
            return;
          }
          else{

                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('username', data.username);
                
                setLoggedIn(true);
                handleRedirection(true);
          }

        setErrorMessage("");
        setError(false);

    }


    const displayMobileMenu = () => {

        if (window.innerWidth <= 707) 
            setMobileMenu(true);
        else 
            setMobileMenu(false);
    }

    useEffect(() => {

        displayMobileMenu();
    }, [])

    window.addEventListener('resize', displayMobileMenu);

    return (

        <div>
            {
                redirect? <Redirect to="/home" /> : null
            }
            {   
                showMobileMenu ? <MobileMenu/> : <Navbar/>
            }
            <Wrapper>
                <Form onSubmit={handleForm}>
                    <h2> Login : </h2>
                    {error && 
                        <ErrorBox 
                            onClick={()=>setError(false)}
                        > ??? {errorMessage}</ErrorBox>
                    }
                    <InputWrapper>
                        <img src="/user.png" height="100%"/>
                        <Input 
                            type="email" 
                            placeholder="E-mail"
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <img src="/mdp.png" height="100%"/>
                        <Input 
                            type="password" 
                            placeholder="password"
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </InputWrapper>
                    <p>Forgot your password ? Click <a>here</a> to reset it. </p>
                    <Submit type="submit" value="login"/>
                    <hr size="1" width="100%"/>
                    <p>You don't have an acount ? Click
                        <Link to="/register"> here </Link> 
                    to register yourself. </p>
                </Form>
            </Wrapper>
        </div>
    )
}

export default LoginUI;

//                        <div>Ic??nes con??ues par <a href="https://www.flaticon.com/fr/auteurs/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
