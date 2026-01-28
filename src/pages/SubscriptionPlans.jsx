import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubscriptionCard from '../components/SubscriptionCard';
import { useAuth } from '../utils/authContext';

const SubscriptionPlans = () => {
  const { upgradeToPremium, isPremium } = useAuth();
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Basic',
      price: 0,
      description: 'Get started with limited access to products',
      features: [
        'View product listings',
        'Limited product details',
        'Basic search functionality',
        'Email support',
      ],
    },
    {
      name: 'Premium',
      price: 99,
      description: 'Full access to all features and vendor contacts',
      features: [
        'Unlimited product access',
        'Full product details',
        'Vendor contact information',
        'Direct vendor chat',
        'Advanced search & filters',
        'Market insights & analytics',
        'Priority support',
        'Exclusive deals & offers',
      ],
    },
  ];

  const handleSelectPlan = (plan) => {
    if (plan.price === 0) {
      navigate('/register');
    } else {
      // Simulate payment success
      upgradeToPremium();
      alert('🎉 Subscription successful! You are now a Premium member.');
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <Navbar />
      
      <div style={styles.plansPage}>
        <div className="container">
          <div style={styles.header}>
            <h1 style={styles.title}>Choose Your Plan</h1>
            <p style={styles.subtitle}>
              Select the perfect plan for your agricultural business needs
            </p>
            {isPremium && (
              <div className="badge badge-premium" style={styles.activeBadge}>
                ✨ You are on Premium Plan
              </div>
            )}
          </div>

          <div style={styles.plansGrid}>
            {plans.map((plan, index) => (
              <SubscriptionCard
                key={index}
                plan={plan}
                onSelect={handleSelectPlan}
                isPopular={plan.name === 'Premium'}
              />
            ))}
          </div>

          <div className="card" style={styles.comparisonCard}>
            <h2 style={styles.comparisonTitle}>Why Upgrade to Premium?</h2>
            <div style={styles.benefitsGrid}>
              <div style={styles.benefit}>
                <div style={styles.benefitIcon}>🔓</div>
                <h3>Full Access</h3>
                <p>View complete product details and specifications</p>
              </div>
              <div style={styles.benefit}>
                <div style={styles.benefitIcon}>💬</div>
                <h3>Direct Contact</h3>
                <p>Chat directly with vendors and negotiate deals</p>
              </div>
              <div style={styles.benefit}>
                <div style={styles.benefitIcon}>📊</div>
                <h3>Market Insights</h3>
                <p>Get real-time pricing and market trends</p>
              </div>
              <div style={styles.benefit}>
                <div style={styles.benefitIcon}>⚡</div>
                <h3>Priority Support</h3>
                <p>24/7 dedicated customer support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  plansPage: {
    minHeight: '80vh',
    padding: '4rem 0',
    background: 'linear-gradient(135deg, var(--off-white) 0%, var(--white) 100%)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '900',
    color: 'var(--text-dark)',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-gray)',
  },
  activeBadge: {
    marginTop: '1rem',
    fontSize: '1rem',
    padding: '0.75rem 2rem',
  },
  plansGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '3rem',
    maxWidth: '1000px',
    margin: '0 auto 4rem',
  },
  comparisonCard: {
    padding: '3rem',
    marginTop: '3rem',
  },
  comparisonTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--text-dark)',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
  },
  benefit: {
    textAlign: 'center',
  },
  benefitIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
};

export default SubscriptionPlans;
