import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from 'react-icons/fa';
import Layout from '@/components/Layout';
import styles from '@/styles/AuthForm.module.css';
import AuthContext from '@/context/AuthContext';

export default function RegisterPage() { 
  const [username, setUsername] = useState(' ')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const { register, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error('Password do not match');
      return;
    }

    register({ username, email, password, passwordConfirm })
  }
  

  return (
    <Layout title="User Registration">
      <div className={styles.auth}>
        <h1>
          <FaUser /> Register
        </h1>

        <ToastContainer />

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div>
            <label htmlFor="email">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div>
            <label htmlFor="email">Confirm Password</label>
            <input 
              type="password" 
              id="passwordConfirm" 
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)} 
            />
          </div>

          <input type="submit" value="Login" className="btn" />

          <p>
            Already have an account? <Link href='/account/login'>Login </Link>
          </p>
        </form>
      </div>
    </Layout>
  )
}
