import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../redux/auth/authApi';
// import { resetPassword } from '../actions/authActions';

function ResetPassword() {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch resetPassword action
    dispatch(resetPassword({ email }));

    // Reset form field
    setEmail('');
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
