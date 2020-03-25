import React, { useState } from 'react';

import './Login.scss'
import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';

const Login = () => {

  const [email, setEmail] = useState('');
  const handleEmailChange = e => setEmail(e.target.value);

  const [password, setPassword] = useState('')
  const handlePasswordChange = e => setPassword(e.target.value);


  const handleSubmit = event => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  }

  return (
    <div className="login">
      <h1>Login In</h1>

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

        <CustomButton type="submit">Log in</CustomButton>
      </form>
    </div>
  )
}

export default Login;