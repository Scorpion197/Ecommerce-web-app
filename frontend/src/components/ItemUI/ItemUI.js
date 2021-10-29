import {useState, useEffect } from 'react'; 

import { useParams } from 'react-router-dom';

//components 
import Navbar from '../Navbar/Navbar';
import ItemDetails from './ItemDetails';
import MobileMenu from '../MobileMenu/MobileMenu';


// hooks 
import {useItemFetch} from '../../Hooks/useItemFetch';

function ItemUI() {
    const itemID = useParams().id;

    const {loading, error, ended, state} = useItemFetch(itemID);

    const itemData = state.item; // get all the item's caracteristics



    return (
        <>
            {
                <Navbar/>
            }

            { ended && 
                <ItemDetails itemData={itemData}/>
            }

            
        </>
    )
}

export default ItemUI
