// API to fetch data from rest_api 

import axios from "axios"

const API = {

    fetchAllProducts : async () => {

        const endpoint = 'http://localhost:8000/api/';
        const response = await (await fetch(endpoint)).json();
        
        return response;

        
    }
}

export default API;