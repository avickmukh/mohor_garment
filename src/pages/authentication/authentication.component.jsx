import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './authentication.styles.scss';

function AuthenticationPage() {
    return(<div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>)
}

export default AuthenticationPage;
