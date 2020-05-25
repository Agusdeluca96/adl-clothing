import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CustomFormInput from '../../components/CustomFormInput';
import CustomButton from '../../components/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './SignIn.scss';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [email, setEmail] = useState('');
  const handleEmailChange = e => setEmail(e.target.value);

  const [password, setPassword] = useState('')
  const handlePasswordChange = e => setPassword(e.target.value);


  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  }

  return (
    <div className="sign-in">
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <CustomFormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleEmailChange}
          label="Email"
          required
        />
        <CustomFormInput
          name="password"
          type="password"
          value={password}
          handleChange={handlePasswordChange}
          label="Password"
          required
        />
        <div className="sign-in-buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} customClass="google-sign-in">Sign in with Google</CustomButton>
        </div>
      </form>

      <span className="sign-up">Don't have an account? <Link to="sign-up">Sign up now!</Link></span>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);