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
        const endpoint = `http://localhost:8000/authentication/api/register`;
        const requestInit = {
            method: 'POST',
            body: JSON.stringify({
                email, username, password, password2
            }),
        }
        const response = await ( await fetch(endpoint, requestInit) ).json();


        return response;
    },

    login: async(email, password) =>{
        const endpoint = `http://localhost:8000/authentication/api/login`;
        const requestInit = {
            method: 'POST',
            body: JSON.stringify({
                email, password
            }),
        }
        const response = await ( await fetch(endpoint, requestInit) ).json();


        return response;
    }
}

export default API;