import {useState, useEffect} from 'react';

import API from '../API';

const initialState = {
    data: {}, 

}

export const useRegister = (email, username, password, password2) => {

    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(false); 
    const [state, setState] = useState(initialState);

    const getData = async() => {


        setLoading(true); 
        setError(false); 

        const data = await API.register(email, username, password, password2);

        setState({
                dataReady: true, // should modify/ remove this
                data: data
            
        });



    }

    const register = async() =>{
        console.log(email);

        try{
            getData();

            if (state.data.response ) {
                
            }

        }catch(err){
            setError(true)
        }
    }

    useEffect(() => {
        getData(); 

    }, []); 

    
    return {loading, error, state, register};
}