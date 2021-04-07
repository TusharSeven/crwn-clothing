import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux'

//the second argument(toggleCartHidden) in the CartIcon is the function which we made in the mapDispatchToProps
const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    //using memoized selector to avoid whole recalculation of quantity when the item gets added to cart
    itemCount: selectCartItemsCount
})
//here we are making toggleCartHidden fuction which calls the toggleCartHidden fuction from cart.action
//the toggleCartHidden fuction inside dipatch is the function that we import from cart.action
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);