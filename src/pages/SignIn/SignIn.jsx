import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../utils/firebase';

import './SignIn.scss';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const handleEmailChange = e => setEmail(e.target.value);

  const [password, setPassword] = useState('')
  const handlePasswordChange = e => setPassword(e.target.value);


  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error.message);
    }

  }

  return (
    <div className="sign-in">
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleEmailChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handlePasswordChange}
          label="Password"
          required
        />
        <div className="sign-in-buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} customClass="google-sign-in">Sign in with Google</CustomButton>
        </div>
      </form>

      <span className="sign-up">Don't have an account? <Link to="sign-up">Sign up now!</Link></span>
    </div>
  )
}

export default SignIn;