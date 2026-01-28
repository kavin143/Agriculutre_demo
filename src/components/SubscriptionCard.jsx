import React from 'react';
import { Check, Star } from 'lucide-react';

const SubscriptionCard = ({ plan, onSelect, isPopular }) => {
  return (
    <div 
      className="card" 
      style={{
        ...styles.planCard,
        ...(isPopular ? styles.popularCard : {}),
      }}
    >
      {isPopular && (
        <div style={styles.popularBadge}>
          <Star size={16} fill="#ffd700" color="#ffd700" />
          Most Popular
        </div>
      )}

      <h3 style={styles.planName}>{plan.name}</h3>
      <div style={styles.priceSection}>
        <span style={styles.price}>₹{plan.price}</span>
        <span style={styles.period}>/month</span>
      </div>

      <p style={styles.description}>{plan.description}</p>

      <ul style={styles.featureList}>
        {plan.features.map((feature, index) => (
          <li key={index} style={styles.featureItem}>
            <Check size={20} color="#52b788" strokeWidth={3} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        className="btn btn-primary" 
        style={styles.selectBtn}
        onClick={() => onSelect(plan)}
      >
        {plan.price === 0 ? 'Get Started' : 'Subscribe Now'}
      </button>
    </div>
  );
};

// ADD THIS LINE - THIS WAS MISSING!
const styles = {
  planCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    height: '100%',
  },
  popularCard: {
    border: '3px solid var(--light-green)',
    transform: 'scale(1.05)',
  },
  popularBadge: {
    position: 'absolute',
    top: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
    color: 'var(--dark-green)',
    padding: '0.5rem 1.5rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
  },
  planName: {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: 'var(--primary-green)',
    marginBottom: '1rem',
  },
  priceSection: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '1rem',
  },
  price: {
    fontSize: '3rem',
    fontWeight: '900',
    color: 'var(--text-dark)',
  },
  period: {
    color: 'var(--text-gray)',
    fontSize: '1rem',
    marginLeft: '0.5rem',
  },
  description: {
    color: 'var(--text-gray)',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  featureList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
    flex: 1,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'var(--text-dark)',
    fontSize: '1rem',
  },
  selectBtn: {
    width: '100%',
    justifyContent: 'center',
    padding: '1rem',
    fontSize: '1.1rem',
  },
};

// ✅ THIS LINE WAS MISSING - ADD THIS AT THE VERY END
export default SubscriptionCard;
