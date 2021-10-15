import {useState, useEffect} from 'react';

import API from '../API';

const initialState = {

    products: [], 

}

export const useHomeFetch = () => {

    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(false); 
    const [state, setState] = useState(initialState);

    const getData = async() => {

        try {

            setLoading(true); 
            setError(false); 

            const data = await API.fetchAllProducts();

            setState(prev => ({

                ...data, 
                products: [...data]

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