import {useState, useEffect} from 'react';

import API from '../API';

const initialState = {
    dataReady: false,
    item: {}, 

}

export const useLogin = (id) => {

    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(false); 
    const [ended, setEnded] = useState(false); 
    const [state, setState] = useState(initialState);

    const getData = async() => {

        try {

            setLoading(true); 
            setError(false); 

            const data = await API.fetchOneProduct(id);

            setState({
                    dataReady: true, // should modify/ remove this
                    item: data
                
            });

            setEnded(true);

        }catch(err) {

            setError(true);
        }
    }

    useEffect(() => {
        getData(); 

    }, []); 

    
    return {loading, error, ended, state};
}