import {useState, useEffect } from 'react'; 

//components 
import MobileMenu from '../MobileMenu/MobileMenu';
import Navbar from '../Navbar/Navbar';

//styles
import {Wrapper, Text, InputWrapper, Submit, Form, Input, ErrorBox} from './AuthUI.styles';

// hooks 
import { Link } from 'react-router-dom';


const RegisterUI = () => {

    const [showMobileMenu, setMobileMenu] = useState(false);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [requestStatus, setRequestStatus] = useState(false);


    const handleForm = (event)=>{
        event.preventDefault();

        //Local errors
        if (userName.length < 4) {

            setErrorMessage("Invalid Email");
            setError(true);

            return;
        }

        if(password.length < 8){

            setErrorMessage("Password too small, at least 8 caracters");
            setError(true);

            return;
        }

        if(password !== confPassword){

            setErrorMessage("The comfirmation password doesn't matches your first entry");
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
                    <h2> Register : </h2>

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


                    <InputWrapper>

                        <img src="/mdp.png" height="100%"/>
                        <Input 
                            type="password" 
                            placeholder="comfirm password"
                            onChange={(e)=>{setConfPassword(e.target.value)}}
                        />

                    </InputWrapper>


                    <Submit type="submit" value="Register"/>

                    <hr size="1" width="100%"/>

                    <p>You already have an acount ? Click 
                        <Link to="/login"> here </Link> 
                    to login. </p>

                </Form>
            </Wrapper>


        </>

    )
}

export default RegisterUI;

//                        <div>Icônes conçues par <a href="https://www.flaticon.com/fr/auteurs/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
