import {useState, useEffect} from 'react';

import API from '../API';


export const useHomeFetch = (id) => {

    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(false); 
    const [state, setState] = useState({item: {}});

    const getData = async() => {

        try {

            setLoading(true); 
            setError(false); 

            const data = await API.fetchOneProduct(id);

            setState(prev => ({

                item: data

            }));

        }catch(err) {

            setError(true);
        }
    }

    useEffect(() => {

        getData(); 
    }, []); 

    
    return {loading, error, state};
}