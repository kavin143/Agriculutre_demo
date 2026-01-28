import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CategoryDropdown = ({ onSelectCategory, selectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', nameTA: 'அனைத்து பொருட்கள்', icon: '🌾' },
    { id: 'seeds', name: 'Seeds', nameTA: 'விதைகள்', icon: '🌱' },
    { id: 'fertilizer', name: 'Fertilizers', nameTA: 'உரங்கள்', icon: '🧪' },
    { id: 'equipment', name: 'Equipment', nameTA: 'உபகரணங்கள்', icon: '⚙️' },
    { id: 'pesticide', name: 'Pesticides', nameTA: 'பூச்சிக்கொல்லிகள்', icon: '🛡️' },
    { id: 'tools', name: 'Farm Tools', nameTA: 'விவசாய கருவிகள்', icon: '🔧' },
    { id: 'organic', name: 'Organic Products', nameTA: 'இயற்கை பொருட்கள்', icon: '♻️' },
  ];

  const handleSelect = (category) => {
    onSelectCategory(category);
    setIsOpen(false);
  };

  const selected = categories.find(cat => cat.id === selectedCategory) || categories[0];

  return (
    <div style={styles.dropdown}>
      <button 
        style={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={styles.icon}>{selected.icon}</span>
        <span style={styles.categoryName}>{selected.name}</span>
        <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
      </button>

      {isOpen && (
        <div style={styles.dropdownMenu}>
          {categories.map((category) => (
            <button
              key={category.id}
              style={{
                ...styles.dropdownItem,
                ...(selectedCategory === category.id ? styles.activeItem : {}),
              }}
              onClick={() => handleSelect(category.id)}
            >
              <span style={styles.icon}>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  dropdown: {
    position: 'relative',
    width: '100%',
    maxWidth: '300px',
  },
  dropdownButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 1.5rem',
    background: 'var(--white)',
    border: '2px solid var(--border-color)',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-dark)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  categoryName: {
    flex: 1,
    textAlign: 'left',
  },
  icon: {
    fontSize: '1.5rem',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '110%',
    left: 0,
    right: 0,
    background: 'var(--white)',
    boxShadow: 'var(--shadow-hover)',
    borderRadius: '12px',
    overflow: 'hidden',
    zIndex: 100,
  },
  dropdownItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 1.5rem',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--border-color)',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--text-dark)',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  activeItem: {
    background: 'var(--light-gray)',
    color: 'var(--primary-green)',
    fontWeight: '700',
  },
};

export default CategoryDropdown;
