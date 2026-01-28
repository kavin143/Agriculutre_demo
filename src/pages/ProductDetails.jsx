import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../utils/authContext';
import { Lock, MapPin, Phone, Mail, MessageSquare, Star } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const { isPremium } = useAuth();
  const navigate = useNavigate();

  // Mock product data
  const product = {
    id: id,
    name: 'Organic Rice Seeds',
    category: 'Seeds',
    price: 1200,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c',
    description: 'Premium quality organic rice seeds with 95% germination rate. Suitable for all soil types.',
    fullDescription: 'These organic rice seeds are sourced from certified organic farms. They have been tested for quality and show a 95% germination rate. Ideal for both small-scale and commercial farming. Disease resistant variety with high yield potential.',
    specifications: {
      'Germination Rate': '95%',
      'Variety': 'Basmati 370',
      'Origin': 'Punjab, India',
      'Shelf Life': '12 months',
      'Minimum Order': '25 kg',
    },
    vendor: {
      name: 'Green Valley Seeds Co.',
      location: 'Chennai, Tamil Nadu',
      phone: '+91 98765 43210',
      email: 'contact@greenvalley.com',
      rating: 4.8,
      reviews: 234,
    },
  };

  return (
    <div>
      <Navbar />
      
      <div style={styles.productPage}>
        <div className="container">
          <div style={styles.productContainer}>
            {/* Product Images */}
            <div style={styles.imageSection}>
              <div style={styles.mainImage}>
                <img src={product.image} alt={product.name} style={styles.image} />
              </div>
            </div>

            {/* Product Info */}
            <div style={styles.infoSection}>
              <div className="badge">{product.category}</div>
              <h1 style={styles.productName}>{product.name}</h1>
              
              <div style={styles.priceSection}>
                <span style={styles.price}>₹{product.price}</span>
                <span style={styles.unit}>/{product.unit}</span>
              </div>

              <p style={styles.description}>{product.description}</p>

              {isPremium ? (
                <>
                  <div style={styles.vendorCard} className="card">
                    <h3 style={styles.vendorTitle}>Vendor Information</h3>
                    <div style={styles.vendorInfo}>
                      <div style={styles.vendorDetail}>
                        <MapPin size={18} />
                        <span>{product.vendor.location}</span>
                      </div>
                      <div style={styles.vendorDetail}>
                        <Phone size={18} />
                        <span>{product.vendor.phone}</span>
                      </div>
                      <div style={styles.vendorDetail}>
                        <Mail size={18} />
                        <span>{product.vendor.email}</span>
                      </div>
                      <div style={styles.vendorDetail}>
                        <Star size={18} fill="#ffd700" color="#ffd700" />
                        <span>{product.vendor.rating} ({product.vendor.reviews} reviews)</span>
                      </div>
                    </div>
                    <button 
                      className="btn btn-primary" 
                      style={styles.contactBtn}
                      onClick={() => navigate('/chat')}
                    >
                      <MessageSquare size={20} />
                      Contact Vendor
                    </button>
                  </div>
                </>
              ) : (
                <div style={styles.lockedSection}>
                  <div style={styles.lockOverlay}>
                    <Lock size={48} color="var(--primary-green)" />
                    <h3 style={styles.lockTitle}>Premium Content</h3>
                    <p style={styles.lockDescription}>
                      Upgrade to Premium to view vendor details and contact information
                    </p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => navigate('/plans')}
                    >
                      Upgrade Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Details */}
          <div style={styles.detailsSection}>
            <div className="card" style={styles.detailCard}>
              <h2 style={styles.sectionTitle}>Product Details</h2>
              <p style={isPremium ? {} : styles.blurredContent}>
                {product.fullDescription}
              </p>
              {!isPremium && (
                <div style={styles.upgradeOverlay}>
                  <Lock size={24} />
                  <span>Upgrade to Premium to view full details</span>
                </div>
              )}
            </div>

            <div className="card" style={styles.detailCard}>
              <h2 style={styles.sectionTitle}>Specifications</h2>
              <table style={styles.specTable}>
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} style={styles.specRow}>
                      <td style={styles.specKey}>{key}</td>
                      <td style={isPremium ? styles.specValue : {...styles.specValue, filter: 'blur(4px)'}}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!isPremium && (
                <div style={styles.upgradeOverlay}>
                  <Lock size={24} />
                  <span>Upgrade to Premium to view specifications</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  productPage: {
    minHeight: '80vh',
    padding: '3rem 0',
  },
  productContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    marginBottom: '3rem',
  },
  imageSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  mainImage: {
    width: '100%',
    height: '500px',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid var(--border-color)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  productName: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'var(--text-dark)',
  },
  priceSection: {
    display: 'flex',
    alignItems: 'baseline',
  },
  price: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'var(--primary-green)',
  },
  unit: {
    fontSize: '1.25rem',
    color: 'var(--text-gray)',
    marginLeft: '0.5rem',
  },
  description: {
    fontSize: '1.1rem',
    color: 'var(--text-gray)',
    lineHeight: '1.8',
  },
  vendorCard: {
    padding: '2rem',
    marginTop: '1rem',
  },
  vendorTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-dark)',
    marginBottom: '1.5rem',
  },
  vendorInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  vendorDetail: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'var(--text-dark)',
    fontSize: '1rem',
  },
  contactBtn: {
    width: '100%',
    justifyContent: 'center',
    padding: '1rem',
  },
  lockedSection: {
    position: 'relative',
    marginTop: '2rem',
  },
  lockOverlay: {
    padding: '3rem',
    background: 'var(--light-gray)',
    borderRadius: '16px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  lockTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-dark)',
  },
  lockDescription: {
    color: 'var(--text-gray)',
    marginBottom: '1rem',
  },
  detailsSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  },
  detailCard: {
    padding: '2rem',
    position: 'relative',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-dark)',
    marginBottom: '1.5rem',
  },
  blurredContent: {
    filter: 'blur(4px)',
    userSelect: 'none',
  },
  upgradeOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--primary-green)',
    fontWeight: '600',
    textAlign: 'center',
  },
  specTable: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 0.5rem',
  },
  specRow: {
    background: 'var(--off-white)',
  },
  specKey: {
    padding: '1rem',
    fontWeight: '600',
    color: 'var(--text-dark)',
    borderRadius: '8px 0 0 8px',
  },
  specValue: {
    padding: '1rem',
    color: 'var(--text-gray)',
    borderRadius: '0 8px 8px 0',
  },
};

export default ProductDetails;
