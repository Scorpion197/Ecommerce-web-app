import React, { useEffect, useState } from 'react'

import '../API'
import API from '../API';

export default function Test() {

    const [data, setData] = useState("");


    

    const shiye3 = async() => {
        console.log(sessionStorage.getItem('token'));
        const res = await API.test(sessionStorage.getItem('token'));
        console.log(res);
    }

    useEffect(()=>{
        shiye3();
    })

    return (
        <div>
            
        </div>
    )
}
