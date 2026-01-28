import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import CategoryDropdown from '../components/CategoryDropdown';
import { useAuth } from '../utils/authContext';
import { useLanguage } from '../utils/languageContext';
import { Crown, Search, Filter } from 'lucide-react';

const UserDashboard = () => {
  const { isPremium } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allProducts = [
    {
      id: 1,
      name: 'Organic Rice Seeds',
      category: 'seeds',
      price: 1200,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c',
      description: 'Premium quality organic rice seeds with 95% germination rate',
      featured: true,
    },
    {
      id: 2,
      name: 'NPK Fertilizer',
      category: 'fertilizer',
      price: 850,
      unit: 'bag',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449',
      description: 'Balanced NPK fertilizer for optimal crop growth',
      featured: false,
    },
    {
      id: 3,
      name: 'Drip Irrigation Kit',
      category: 'equipment',
      price: 4500,
      unit: 'set',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b',
      description: 'Complete drip irrigation system for 1-acre land',
      featured: true,
    },
    {
      id: 4,
      name: 'Bio Pesticide',
      category: 'pesticide',
      price: 650,
      unit: 'liter',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d',
      description: 'Organic pesticide safe for crops and environment',
      featured: false,
    },
  ];

  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div>
      <Navbar />
      
      <div style={styles.dashboard}>
        <div className="container">
          {!isPremium && (
            <div className="card" style={styles.upgradeCard}>
              <div style={styles.upgradeContent}>
                <Crown size={48} color="#ffd700" />
                <div>
                  <h2 style={styles.upgradeTitle}>{t('upgradeToPremium')}</h2>
                  <p style={styles.upgradeDescription}>
                    {t('unlockFullAccess')}
                  </p>
                </div>
                <button 
                  className="btn btn-primary" 
                  style={styles.upgradeBtn}
                  onClick={() => navigate('/plans')}
                >
                  {t('viewPlans')}
                </button>
              </div>
            </div>
          )}

          <div style={styles.header}>
            <div>
              <h1 style={styles.title}>{t('productMarketplace')}</h1>
            </div>

            <div style={styles.controlsSection}>
              <CategoryDropdown 
                onSelectCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />

              <div style={styles.searchBar}>
                <Search size={20} color="var(--text-gray)" />
                <input
                  type="text"
                  placeholder={t('searchProducts')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={styles.searchInput}
                />
              </div>

              <button className="btn btn-outline" style={styles.filterBtn}>
                <Filter size={20} />
                {t('filters')}
              </button>
            </div>
          </div>

          <div style={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  dashboard: {
    minHeight: '80vh',
    padding: '3rem 0',
  },
  upgradeCard: {
    marginBottom: '2rem',
    background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
    color: 'var(--white)',
  },
  upgradeContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  upgradeTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
  },
  upgradeDescription: {
    opacity: 0.9,
  },
  upgradeBtn: {
    marginLeft: 'auto',
    background: 'var(--white)',
    color: 'var(--primary-green)',
  },
  header: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'var(--text-dark)',
    marginBottom: '2rem',
  },
  controlsSection: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0 1.5rem',
    background: 'var(--off-white)',
    border: '2px solid var(--border-color)',
    borderRadius: '12px',
  },
  searchInput: {
    flex: 1,
    padding: '1rem 0',
    border: 'none',
    background: 'transparent',
    fontSize: '1rem',
  },
  filterBtn: {
    padding: '1rem 2rem',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
  },
};

export default UserDashboard;
