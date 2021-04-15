import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';
//the second argument(addItem) in the CollectionItem is the function which we made in the mapDispatchToProps

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton className='custom-button' onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    //here we are making addItem fuction which takes item as argument which calls the addItem fuction from cart.action
    //the addItem fuction inside dipatch is the function that we import from cart.action
    null,
    mapDispatchToProps
)(CollectionItem);

