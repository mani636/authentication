import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError('Signup failed. Please check your inputs.');
    }
  };

  return (
    <div className='auth-wrapper'>
      <div className='auth-card'>
        <h2>Sign Up</h2>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={handleSignup}>Sign Up</button>
        {error && <p className='error-message'>{error}</p>}
        <p className='auth-switch'>
          Already have an account? <a href='/login'>Login</a>
        </p>
      </div>
    </div>
  );
}
