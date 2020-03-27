import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../utils/firebase';

import './SignUp.scss';

const SignUp = () => {

  const [displayName, setDisplayName] = useState('');
  const handleDisplayNameChange = e => setDisplayName(e.target.value);

  const [email, setEmail] = useState('');
  const handleEmailChange = e => setEmail(e.target.value);

  const [password, setPassword] = useState('')
  const handlePasswordChange = e => setPassword(e.target.value);

  const [confirmPassword, setConfirmPassword] = useState('')
  const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value);

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          handleChange={handleDisplayNameChange}
          label="Display name"
          required
        />
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
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleConfirmPasswordChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>

      <span className="sign-in">Already have an account? <Link to="sign-in">Sign in!</Link></span>
    </div>
  );
}

export default SignUp;