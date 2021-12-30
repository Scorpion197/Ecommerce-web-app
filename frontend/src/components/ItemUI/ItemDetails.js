import React from 'react'

//react router 
import { useParams } from 'react-router-dom';
//styles 
import {Wrapper, Text, Image, Button, IntraWrapper} from './ItemDetails.styles';

// hooks 
import { useItemFetch } from '../../Hooks/useItemFetch';
//redux
import { addToCart, postAddToCart } from '../../store/cart/cart';
import { connect } from 'react-redux';

const ItemDetails = (props) => {

    const itemID = useParams().id; 
    const {loading, error, ended, state } = useItemFetch(itemID);
    const itemData = state.item; 
    return (
        <Wrapper>
            <IntraWrapper>

            <Image src={itemData.image_url} alt="Go easy on your wallet"/>

            <Text>
                <h2 className="title"> {itemData.product_name} </h2>
                <p><strong>Price : </strong> <span id="price-tag">{itemData.product_price} DzD </span> </p>
                <p><strong>Description : </strong> 
                    Have you ever noticed how boring it is when looking at your phone to 
                    tell the time ? Are you amoungst those groups of intellectuals whom think that
                    being able to tell the time should cost at leat the minimum wage of an italian citizen ? <br/>
                    If so, you have found yourself in the right place with our 
                    <em>{itemData.product_name}</em> ! You can now fulfill your ambitions !

                </p>

                <div>
                    <Button onClick={props.postAddToCart}>Add to Cart</Button>

                    <Button>Buy Directly</Button>
                </div>

                <p id="conditions">
                    General Terms and conditions: By acquiring this product, you certify yourself as
                    either being very dumb, or else, being very rich and dumb 
                </p>
            </Text>

            </IntraWrapper>


        </Wrapper>
    )
}
const mapStateToProps = state => {

    return {
        
        count: state.count, 
        payload: state.payload
    }
}

const mapDispatchToProps = dispatch => {

    return {

        postAddToCart: () => dispatch(postAddToCart())
    }
}

export default connect(

    mapStateToProps, 
    mapDispatchToProps

)(ItemDetails);