import React from 'react'

export default function ItemDetails(props) {
    return (
        <div>
            <img src={props.image_url}/>

            <h1> {props.product_name} </h1>
            <p> Price : {props.product_price} </p>
            <p> Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        
        
        </div>
    )
}
