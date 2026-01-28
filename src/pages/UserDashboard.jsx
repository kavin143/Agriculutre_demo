import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useAuth } from '../utils/authContext';
import { useLanguage } from '../utils/languageContext';
import { Crown, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const UserDashboard = () => {
  const { isPremium } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Horizontal Categories (Flipkart style)
  const categories = [
    { id: 'all', name: 'All Products', nameTA: 'அனைத்து பொருட்கள்', icon: '🌾' },
    { id: 'tractors', name: 'Tractors', nameTA: 'டிராக்டர்கள்', icon: '🚜' },
    { id: 'spare-parts', name: 'Spare Parts', nameTA: 'உதிரி பாகங்கள்', icon: '⚙️' },
    { id: 'trailers', name: 'Trailers', nameTA: 'டிரெய்லர்கள்', icon: '🚛' },
    { id: 'rotavators', name: 'Rotavators', nameTA: 'ரோட்டவேட்டர்கள்', icon: '🔧' },
    { id: 'seeds', name: 'Seeds', nameTA: 'விதைகள்', icon: '🌱' },
    { id: 'fertilizers', name: 'Fertilizers', nameTA: 'உரங்கள்', icon: '🧪' },
    { id: 'organic', name: 'Organic Products', nameTA: 'இயற்கை பொருட்கள்', icon: '♻️' },
    { id: 'tools', name: 'Farm Tools', nameTA: 'விவசாய கருவிகள்', icon: '🔨' },
    { id: 'equipment', name: 'Equipment', nameTA: 'உபகரணங்கள்', icon: '⚡' },
    { id: 'irrigation', name: 'Irrigation', nameTA: 'நீர்ப்பாசனம்', icon: '💧' },
    { id: 'building', name: 'Building Materials', nameTA: 'கட்டுமான பொருட்கள்', icon: '🏗️' },
  ];

  const allProducts = [
     // Original 4 products
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
      name: 'Rotavator 5 Feet',
      category: 'rotavators',
      price: 35000,
      unit: 'unit',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d',
      description: 'High-quality rotavator for soil preparation',
      featured: false,
    },

    {
      id: 5,
      name: 'Tractor Tire 14.9-28',
      category: 'spare-parts',
      price: 8500,
      unit: 'piece',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
      description: 'Durable rear tractor tire with excellent grip',
      featured: false,
    },

    // Trailers
    {
      id: 6,
      name: 'Farm Trolley 2 Ton',
      category: 'trailers',
      price: 45000,
      unit: 'unit',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7',
      description: '2-ton capacity farm trolley with hydraulic tipping',
      featured: false,
    },



  
    // Fertilizers
    {
      id: 12,
      name: 'NPK Fertilizer 19:19:19',
      category: 'fertilizers',
      price: 1250,
      unit: 'bag',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
      description: 'Balanced NPK fertilizer for all crops - 50kg bag',
      featured: false,
    },
    {
      id: 13,
      name: 'Urea Fertilizer',
      category: 'fertilizers',
      price: 850,
      unit: 'bag',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8',
      description: 'Premium grade urea for nitrogen boost - 50kg bag',
      featured: false,
    },

 

    // Farm Tools
    {
      id: 17,
      name: 'Agricultural Spade',
      category: 'tools',
      price: 450,
      unit: 'piece',
      image: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648',
      description: 'Heavy-duty steel spade with wooden handle',
      featured: false,
    },
    {
      id: 18,
      name: 'Garden Hoe Set',
      category: 'tools',
      price: 650,
      unit: 'set',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
      description: 'Professional hoe set for weeding and cultivation',
      featured: false,
    },
    
    {
      id: 21,
      name: 'Sprinkler System',
      category: 'irrigation',
      price: 6500,
      unit: 'set',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2',
      description: 'Automatic sprinkler system with timer',
      featured: false,
    },
    

    // Building Materials
    {
      id: 24,
      name: 'Poly House Sheet 200 Micron',
      category: 'building',
      price: 85,
      unit: 'sq.ft',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
      description: 'UV stabilized polyhouse covering material',
      featured: false,
    },

  ];

  // Filter products by category and search term
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <h1 style={styles.title}>{t('productMarketplace')}</h1>
            
            {/* Search Bar */}
            <div style={styles.searchSection}>
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

          {/* Horizontal Category Navigation (Flipkart Style) */}
          <div style={styles.categorySection}>
            <button style={styles.scrollButton} onClick={() => {
              document.getElementById('categoryScroll').scrollBy({ left: -200, behavior: 'smooth' });
            }}>
              <ChevronLeft size={24} />
            </button>

            <div style={styles.categoryScrollContainer} id="categoryScroll">
              {categories.map((category) => (
                <button
                  key={category.id}
                  style={{
                    ...styles.categoryCard,
                    ...(selectedCategory === category.id ? styles.activeCategoryCard : {}),
                  }}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span style={styles.categoryIcon}>{category.icon}</span>
                  <span style={styles.categoryName}>{category.name}</span>
                </button>
              ))}
            </div>

            <button style={styles.scrollButton} onClick={() => {
              document.getElementById('categoryScroll').scrollBy({ left: 200, behavior: 'smooth' });
            }}>
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Products Count */}
          <div style={styles.resultsInfo}>
            <p style={styles.resultsText}>
              Showing <strong>{filteredProducts.length}</strong> products
              {selectedCategory !== 'all' && (
                <> in <strong>{categories.find(c => c.id === selectedCategory)?.name}</strong></>
              )}
            </p>
          </div>

          {/* Products Grid */}
          <div style={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={styles.noResults}>
              <p style={styles.noResultsText}>No products found</p>
              <button 
                className="btn btn-outline"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
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
    background: 'var(--off-white)',
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
    marginBottom: '1.5rem',
  },
  searchSection: {
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
    background: 'var(--white)',
    border: '2px solid var(--border-color)',
    borderRadius: '12px',
    boxShadow: 'var(--shadow)',
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

  // Horizontal Category Section (Flipkart Style)
  categorySection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    position: 'relative',
  },
  scrollButton: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'var(--white)',
    border: '2px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: 'var(--shadow)',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  },
  categoryScrollContainer: {
    display: 'flex',
    gap: '1rem',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    padding: '1rem 0',
    flex: 1,
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE
  },
  categoryCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 1.5rem',
    background: 'var(--white)',
    border: '2px solid var(--border-color)',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '140px',
    flexShrink: 0,
    boxShadow: 'var(--shadow)',
  },
  activeCategoryCard: {
    background: 'var(--light-green)',
    borderColor: 'var(--primary-green)',
    color: 'var(--white)',
    transform: 'translateY(-4px)',
    boxShadow: 'var(--shadow-hover)',
  },
  categoryIcon: {
    fontSize: '2rem',
  },
  categoryName: {
    fontSize: '0.9rem',
    fontWeight: '600',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  // Results Info
  resultsInfo: {
    marginBottom: '1.5rem',
  },
  resultsText: {
    fontSize: '1rem',
    color: 'var(--text-gray)',
  },

  // Products Grid
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
  },

  // No Results
  noResults: {
    textAlign: 'center',
    padding: '4rem 2rem',
  },
  noResultsText: {
    fontSize: '1.25rem',
    color: 'var(--text-gray)',
    marginBottom: '1.5rem',
  },
};

export default UserDashboard;
