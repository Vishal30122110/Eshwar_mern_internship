import React, { useState } from 'react';

export const Form1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(inputEmail)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email format');
    }
  };
  const handlePasswordChange=(e)=>
  { const inputPassword = e.target.value;
    setPassword(inputPassword);
    const passpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passpattern.test(inputPassword)) {
        setPasswordError('');}
    else{
        setEmailError("try again")}
  }

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            alt="Enter your email"
          />
          <br></br>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
          <br></br>
          Contact number : 
          <input type="number" />
        </label>
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        {emailError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </form>
      <p>Your name is {name}</p>
      <p>Your email ID is {email}</p>
      <p> your password is {password}</p>
    </div>
  );
};
