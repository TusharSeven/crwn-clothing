import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/cap.svg';
//these are styled components
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                {/* <OptionLink className='option' to='/contact'>CONTACT</OptionLink> */}
                {
                    currentUser ?
                        //by using as attribute we can pass element as prop to the styled commponent 
                        (<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>)
                        :
                        (<OptionLink className='option' to='/signin'>SIGN IN</OptionLink>)
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}
//it is a function which assign prop(currentUser) to the component(Header) which takes the value of currentUser from the rootReducer

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

//it gets repeated to write state in arhgument in the above method , thats why we use createStructuredSelector
//another way
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
//connect is a higher order component which take two arguments
export default connect(mapStateToProps)(Header);