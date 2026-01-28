import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../utils/authContext';
import { Leaf, Mail, Lock, User, Phone } from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Demo registration logic
    const userData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      isPremium: false,
      isAdmin: false,
    };
    
    login(userData);
    navigate('/dashboard');
  };

  return (
    <div style={styles.container}>
      <div style={styles.registerBox} className="fade-in">
        <div style={styles.logoSection}>
          <Leaf size={48} color="var(--primary-green)" />
          <h1 style={styles.title}>Create Account</h1>
          <p style={styles.subtitle}>Join AgriConnect today</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div className="form-group">
            <label className="form-label">
              <User size={18} />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="John Farmer"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <Mail size={18} />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <Phone size={18} />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <Lock size={18} />
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <Lock size={18} />
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-input"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
            Create Account
          </button>
        </form>

        <p style={styles.footer}>
          Already have an account?{' '}
          <Link to="/login" style={styles.link}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, var(--primary-green), var(--light-green))',
    padding: '2rem',
  },
  registerBox: {
    width: '100%',
    maxWidth: '520px',
    background: 'var(--white)',
    borderRadius: '24px',
    padding: '3rem',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },
  logoSection: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '900',
    color: 'var(--text-dark)',
    marginTop: '1rem',
  },
  subtitle: {
    color: 'var(--text-gray)',
    marginTop: '0.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  submitBtn: {
    width: '100%',
    justifyContent: 'center',
    padding: '1rem',
    fontSize: '1.1rem',
    marginTop: '1rem',
  },
  footer: {
    textAlign: 'center',
    marginTop: '2rem',
    color: 'var(--text-gray)',
  },
  link: {
    color: 'var(--primary-green)',
    fontWeight: '700',
  },
};

export default RegisterPage;
