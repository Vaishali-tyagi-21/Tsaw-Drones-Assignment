// Registration.js
import React, { useState } from 'react';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleRegistration = () => {
    // Implement registration logic here
  };

  return (
    <div>
      <h2>Registration</h2>
      <label>Username: </label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
