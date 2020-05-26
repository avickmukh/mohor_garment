import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default function SignUp(){
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName})
            setPassword('');
            setEmail('');
            setDisplayName('');
            setConfirmPassword('');
        }
        catch(e){
            console.error(e)
        }
    }
   
    return(
        <div className='sign-up'>
            <h2 className='title'>I don't have an Account</h2>
            <span>Signup with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    label='Emai'
                    required
                />
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={(e)=>setDisplayName(e.target.value)}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}