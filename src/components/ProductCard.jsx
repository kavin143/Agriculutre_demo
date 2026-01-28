import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Star } from 'lucide-react';
import { useAuth } from '../utils/authContext';

const ProductCard = ({ product }) => {
  const { isPremium } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="card" style={styles.productCard}>
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
        {product.featured && (
          <span style={styles.featuredBadge}>
            <Star size={14} fill="#ffd700" color="#ffd700" />
            Featured
          </span>
        )}
      </div>

      <div style={styles.cardContent}>
        <h3 style={styles.productName}>{product.name}</h3>
        <p style={styles.category}>{product.category}</p>
        
        <div style={styles.priceSection}>
          <span style={styles.price}>₹{product.price}</span>
          <span style={styles.unit}>/{product.unit}</span>
        </div>

        <div style={styles.detailsPreview}>
          <p style={!isPremium ? styles.blurredText : {}}>
            {product.description}
          </p>
          {!isPremium && (
            <div style={styles.lockBadge}>
              <Lock size={14} />
              Premium Only
            </div>
          )}
        </div>

        <button 
          className="btn btn-primary" 
          style={styles.viewBtn}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {isPremium ? 'View Details' : 'Unlock Details'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  productCard: {
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '12px',
    marginBottom: '1rem',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  featuredBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    color: 'var(--dark-green)',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  productName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
    marginBottom: '0.25rem',
  },
  category: {
    color: 'var(--text-gray)',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  priceSection: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '1rem',
  },
  price: {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: 'var(--primary-green)',
  },
  unit: {
    color: 'var(--text-gray)',
    fontSize: '1rem',
    marginLeft: '0.25rem',
  },
  detailsPreview: {
    position: 'relative',
    marginBottom: '1rem',
    flex: 1,
  },
  blurredText: {
    filter: 'blur(4px)',
    userSelect: 'none',
  },
  lockBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.4rem 0.8rem',
    background: 'var(--light-gray)',
    borderRadius: '8px',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--primary-green)',
    marginTop: '0.5rem',
  },
  viewBtn: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 'auto',
  },
};

export default ProductCard;
