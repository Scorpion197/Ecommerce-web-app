import React from 'react'
import {useState, useEffect } from 'react'; 

import Navbar from '../Navbar/Navbar';


function ItemUI() {
    const {loading, error, state} = useHomeFetch();

    const itemData = state.item; // get all the item's caracteristics


    return (
        <>
            <Navbar />
        </>
    )
}

export default ItemUI
