// API to fetch data from rest_api 

import axios from "axios"

const API = {

    fetchAllProducts : async () => {

        const endpoint = 'http://localhost:8000/api/';
        const response = await (await fetch(endpoint)).json();
        
        return response;

    }, 

    fetchOneProduct : async(productId) => {

        const endpoint = `http://localhost:8000/api/${productId}`;
        const response = await (await fetch(endpoint)).json();
        
        return response;
    },

    register: async(email, username, password, password2) =>{
        const endpoint = `http://localhost:8000/api/auth/register`;
        const requestInit = {
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                email, username, password, password2
            }),
        }
        console.log(requestInit);
        const response = await ( await fetch(endpoint, requestInit) ).json();


        return response;
    },

    login: async(email, password) =>{
        const endpoint = `http://localhost:8000/api/auth/login`;
        const requestInit = {
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                email, password
            }),
        }
        const response = await ( await fetch(endpoint, requestInit) ).json();

        
        return response;
    },

    test: async(token) => {
        const endpoint = `http://localhost:8000/api/auth/test`;
        const requestInit = {
            method: 'GET',
            headers: { "Authorization":  "Token " + token },
            
        }
        const response = await ( await fetch(endpoint, requestInit) ).json();


        return response;
    }


}

export default API;