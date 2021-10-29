import {useState, useEffect } from 'react'; 

//components 
import MobileMenu from '../MobileMenu/MobileMenu';
import Navbar from '../Navbar/Navbar';

//styles
import {Wrapper, Text, InputWrapper, Submit, Form, Input, ErrorBox} from './AuthUI.styles';

// hooks 
import { Link } from 'react-router-dom';


const LoginUI = () => {

    const [showMobileMenu, setMobileMenu] = useState(false);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [requestStatus, setRequestStatus] = useState(false);


    const handleForm = (event)=>{
        event.preventDefault();

        if (userName.length < 4 || password.length < 8) {

            setErrorMessage("Username/Email or password Invalid");
            setError(true);

            return;
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
        <>
            {
                showMobileMenu ? <MobileMenu/> : <Navbar/>
            }
            <Wrapper>
                <Form onSubmit={handleForm}>
                    <h2> Login : </h2>

                    {error && 

                        <ErrorBox 
                            onClick={()=>setError(false)}
                        > ❌ {errorMessage}</ErrorBox>
                    }

                    <InputWrapper>

                        <img src="/user.png" height="100%"/>


                        <Input 
                            type="email" 
                            placeholder="E-mail"
                            onChange={(e)=>{setUserName(e.target.value)}}
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


        </>

    )
}

export default LoginUI;

//                        <div>Icônes conçues par <a href="https://www.flaticon.com/fr/auteurs/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
