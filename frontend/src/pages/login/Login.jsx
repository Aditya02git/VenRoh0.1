import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { account } from '@appwrite'; // 👈 import centralized Appwrite config
import './LoginStyles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ Login with Appwrite
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Create a session
      await account.createEmailPasswordSession(email, password);

      // Fetch logged-in user
      const user = await account.get();
      console.log('✅ Logged in as:', user);

      // You can redirect to dashboard here
      navigate('/dashboard');
    } catch (err) {
      console.error('❌ Login failed:', err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Signup with Appwrite
  const handleSignUp = async () => {
    setLoading(true);
    try {
      // Generate a random ID for new user
      const user = await account.create(
        'unique()', // auto ID
        email,
        password
      );
      console.log('✅ User created:', user);

      // Auto login after signup
      await account.createEmailSession(email, password);
      const loggedUser = await account.get();
      console.log('✅ Signed in as:', loggedUser);
    } catch (err) {
      console.error('❌ Signup failed:', err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <motion.div 
        className="login-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1 
          className="login-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Welcome Back!
        </motion.h1>
        
        <motion.p 
          className="login-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We're glad to see you again! Let's get back.
        </motion.p>

        <motion.form 
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.input
            type="text"
            placeholder="Enter your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
          
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
          
          <motion.button
            type="submit"
            className="login-button"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {loading ? 'Loading...' : 'Login'}
          </motion.button>
        </motion.form>

        <motion.div 
          className="login-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />

        <motion.p 
          className="signup-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Are you new?
        </motion.p>

        <motion.button
          onClick={handleSignUp}
          className="signup-button"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {loading ? 'Loading...' : 'Sign up'}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Login;
