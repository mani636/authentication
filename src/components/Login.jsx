import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(''); // clear error on success
      navigate('/');
    } catch (err) {
      switch (err.code) {
        case 'auth/invalid-email':
          setError('The email format is invalid.');
          break;
        case 'auth/user-not-found':
          setError('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        default:
          setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className='auth-wrapper'>
      <div className='auth-card'>
        <h2>Login</h2>
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
        <button onClick={handleLogin}>Login</button>
        {error && <p className='error-message'>{error}</p>}
        <p className='auth-switch'>
          Don't have an account? <a href='/signup'>Sign Up</a>
        </p>
      </div>
    </div>
  );
}
