import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = ({ currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
        <img src={logo} alt="Logo" className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ? <div  className='option' onClick={()=> auth.signOut()}>Sign Out</div> :
          (<Link className='option' to='/authentication'>
          SignIn
        </Link>)
      }
    </div>
  </div>
);

export default Header;