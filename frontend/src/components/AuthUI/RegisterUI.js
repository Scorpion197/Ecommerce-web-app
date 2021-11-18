import {useState, useEffect } from 'react'; 

//components 
import MobileMenu from '../MobileMenu/MobileMenu';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

//styles
import {Wrapper, Text, InputWrapper, Submit, Form, Input, ErrorBox} from './AuthUI.styles';



// hooks 
import API from '../../API';


const RegisterUI = () => {

    const [showMobileMenu, setMobileMenu] = useState(false);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    //const [loading, errorRequest, state, register] = useRegister(email, userName, password, confPassword);


    const handleForm = async (event)=>{
        event.preventDefault();

        //Local errors
        if (userName.length < 4) {

            setErrorMessage("Invalid Username");
            setError(true);

            return;
        }

        if(password.length < 6){

            setErrorMessage("Password too small, at least 8 caracters");
            setError(true);

            return;
        }

        if(password !== confPassword){

            setErrorMessage("The comfirmation password doesn't matches your first entry");
            setError(true);

            return;
        }

        //Send request
        let data = await API.register(email, userName, password, confPassword);

        if(data.response.status == 'failed'){

            //Hmmmmmm, this should be done on the backend side
            if(data.detail)
                setErrorMessage(data.detail);
            else if (data.email)
                setErrorMessage(data.email[0]);
            else if (data.username)
                setErrorMessage(data.username[0]);


            setError(true); 

            return;
        }
        else{

            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('email', data.email);
            sessionStorage.setItem('username', data.username);
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

                        <img src="/email.png" height="100%"
                        
                        //Icônes conçues par <a href="https://www.flaticon.com/fr/auteurs/sumberrejeki" title="SumberRejeki">SumberRejeki</a> from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
                        />


                        <Input 

                            type="email" 
                            placeholder="E-mail"
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />

                    </InputWrapper>

                    <InputWrapper>

                        <img src="/user.png" height="100%"/>


                        <Input 
                            type="text" 
                            placeholder="Username"
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
