import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}
//it is a function which assign prop(currentUser) to the component(Header) which takes the value of currentUser from the rootReducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
//connect is a higher order component which take two arguments
export default connect(mapStateToProps)(Header);