import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Home() {
  const handleLogout = () => signOut(auth);

  return (
    <div>
      <h1>Welcome Home!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
