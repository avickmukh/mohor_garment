import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './signin.styles.scss';

function SignIn(){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const handleSubmit = async (event) => {
     event.preventDefault();
     try{
          await auth.signInWithEmailAndPassword(email, password);
          setEmail('');
          setPassword('');
     }
     catch(e){
          console.error(e);
     }
   }
   return(
       <div className='sign-in'>
           <h2>I already have an account</h2>
           <span>Sign in with your email and password</span>
           <form onSubmit={handleSubmit}>
               <FormInput 
                    name='email' 
                    type='email' 
                    value={email}
                    label='Email' 
                    onChange={e => setEmail(e.target.value)}
                    required />
               <FormInput 
                    name='password' 
                    type='password' 
                    value={password} 
                    label='Password'
                    onChange={e => setPassword(e.target.value)}
                    required />
               <div className='button'>
                    <CustomButton type='submit'> Sign In</CustomButton>
                    <CustomButton type='submit'  onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
               </div>
           </form>
        </div>
   )

}

export default SignIn;