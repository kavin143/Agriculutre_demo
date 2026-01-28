import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Leaf, Shield, Users, TrendingUp, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Leaf,
      title: 'Quality Products',
      description: 'Access to verified agricultural products from trusted vendors',
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Safe and secure transactions with buyer protection',
    },
    {
      icon: Users,
      title: 'Direct Vendor Connect',
      description: 'Chat directly with vendors and negotiate deals',
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Get real-time market prices and trends',
    },
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroContent}>
          <div style={styles.heroText} className="fade-in">
            <h1 style={styles.heroTitle}>
              Connecting Farmers with
              <span className="gradient-text"> Quality Products</span>
            </h1>
            <p style={styles.heroDescription}>
              Access premium agricultural products, connect with verified vendors,
              and grow your farming business with AgriConnect.
            </p>
            <div style={styles.heroCTA}>
              <button 
                className="btn btn-primary" 
                style={styles.primaryBtn}
                onClick={() => navigate('/register')}
              >
                Get Started Free
                <ChevronRight size={20} />
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/plans')}
              >
                View Plans
              </button>
            </div>
          </div>

          <div style={styles.heroImage} className="fade-in">
            <div style={styles.imagePlaceholder}>
              <Leaf size={120} color="var(--light-green)" />
              <p style={styles.imagePlaceholderText}>
                🌾 Premium Agriculture Platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Why Choose AgriConnect?</h2>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card fade-in" style={styles.featureCard}>
                  <div style={styles.featureIcon}>
                    <Icon size={32} color="var(--light-green)" />
                  </div>
                  <h3 style={styles.featureTitle}>{feature.title}</h3>
                  <p style={styles.featureDescription}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div className="container" style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Transform Your Farming?</h2>
          <p style={styles.ctaDescription}>
            Join thousands of farmers already using AgriConnect
          </p>
          <button 
            className="btn btn-primary" 
            style={styles.ctaBtn}
            onClick={() => navigate('/register')}
          >
            Start Your Journey
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  hero: {
    padding: '5rem 0',
    background: 'linear-gradient(135deg, var(--off-white) 0%, var(--white) 100%)',
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '900',
    lineHeight: '1.2',
    color: 'var(--text-dark)',
  },
  heroDescription: {
    fontSize: '1.25rem',
    color: 'var(--text-gray)',
    lineHeight: '1.8',
  },
  heroCTA: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  primaryBtn: {
    fontSize: '1.1rem',
    padding: '1rem 2rem',
  },
  heroImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: '400px',
    background: 'linear-gradient(135deg, var(--light-gray), var(--off-white))',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    border: '2px dashed var(--border-color)',
  },
  imagePlaceholderText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary-green)',
  },
  features: {
    padding: '5rem 0',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '900',
    textAlign: 'center',
    color: 'var(--text-dark)',
    marginBottom: '3rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
  },
  featureCard: {
    padding: '2rem',
    textAlign: 'center',
  },
  featureIcon: {
    width: '80px',
    height: '80px',
    margin: '0 auto 1.5rem',
    background: 'var(--light-gray)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
    marginBottom: '0.75rem',
  },
  featureDescription: {
    color: 'var(--text-gray)',
    lineHeight: '1.6',
  },
  cta: {
    padding: '5rem 0',
    background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
  },
  ctaContent: {
    textAlign: 'center',
    color: 'var(--white)',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '900',
    marginBottom: '1rem',
  },
  ctaDescription: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    opacity: 0.9,
  },
  ctaBtn: {
    fontSize: '1.1rem',
    padding: '1rem 2.5rem',
    background: 'var(--white)',
    color: 'var(--primary-green)',
  },
};

export default LandingPage;
