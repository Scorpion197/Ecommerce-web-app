// API to fetch data from rest_api 

import axios from "axios"

const API = {

    fetchAllProducts : async () => {

        const endpoint = 'http://localhost:8000/api/';

        try {

            const response = axios.get(endpoint).then((response) => {

                console.log(response);
            })
        } catch(error) {

            console.log("ERROOOOOR: ", error);
        }
        
        
    }
}

export default API;