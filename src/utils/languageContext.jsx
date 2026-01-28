import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    dashboard: 'Dashboard',
    plans: 'Plans',
    admin: 'Admin',
    vendorPanel: 'Vendor Panel',
    login: 'Login',
    logout: 'Logout',
    getStarted: 'Get Started',
    
    // Landing Page
    heroTitle: 'Connecting Farmers with',
    heroSubtitle: 'Quality Products',
    heroDescription: 'Access premium agricultural products, connect with verified vendors, and grow your farming business with AgriConnect.',
    
    // Dashboard
    productMarketplace: 'Product Marketplace',
    searchProducts: 'Search products...',
    filters: 'Filters',
    upgradeToPremium: 'Upgrade to Premium',
    unlockFullAccess: 'Unlock full product details, vendor contacts, and exclusive deals',
    viewPlans: 'View Plans',
    
    // Categories
    allProducts: 'All Products',
    seeds: 'Seeds',
    fertilizers: 'Fertilizers',
    equipment: 'Equipment',
    pesticides: 'Pesticides',
    farmTools: 'Farm Tools',
    organicProducts: 'Organic Products',
    
    // Vendor
    myProducts: 'My Products',
    addProduct: 'Add Product',
    orders: 'Orders',
    messages: 'Messages',
    analytics: 'Analytics',
    settings: 'Settings',
  },
  ta: {
    // Navigation
    dashboard: 'முகப்பு',
    plans: 'திட்டங்கள்',
    admin: 'நிர்வாகி',
    vendorPanel: 'விற்பனையாளர் பலகை',
    login: 'உள்நுழைய',
    logout: 'வெளியேறு',
    getStarted: 'தொடங்குங்கள்',
    
    // Landing Page
    heroTitle: 'விவசாயிகளை இணைக்கிறது',
    heroSubtitle: 'தரமான பொருட்கள்',
    heroDescription: 'உயர்தர விவசாய பொருட்கள், சரிபார்க்கப்பட்ட விற்பனையாளர்கள் மற்றும் AgriConnect மூலம் உங்கள் விவசாய வணிகத்தை வளர்த்துக் கொள்ளுங்கள்.',
    
    // Dashboard
    productMarketplace: 'தயாரிப்பு சந்தை',
    searchProducts: 'தயாரிப்புகளைத் தேடுங்கள்...',
    filters: 'வடிகட்டிகள்',
    upgradeToPremium: 'பிரீமியத்திற்கு மேம்படுத்தவும்',
    unlockFullAccess: 'முழு தயாரிப்பு விவரங்கள், விற்பனையாளர் தொடர்புகள் மற்றும் சிறப்பு சலுகைகளைத் திறக்கவும்',
    viewPlans: 'திட்டங்களைக் காண்க',
    
    // Categories
    allProducts: 'அனைத்து பொருட்கள்',
    seeds: 'விதைகள்',
    fertilizers: 'உரங்கள்',
    equipment: 'உபகரணங்கள்',
    pesticides: 'பூச்சிக்கொல்லிகள்',
    farmTools: 'விவசாய கருவிகள்',
    organicProducts: 'இயற்கை பொருட்கள்',
    
    // Vendor
    myProducts: 'எனது தயாரிப்புகள்',
    addProduct: 'தயாரிப்பு சேர்க்கவும்',
    orders: 'ஆர்டர்கள்',
    messages: 'செய்திகள்',
    analytics: 'பகுப்பாய்வு',
    settings: 'அமைப்புகள்',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'en';
    setLanguage(storedLang);
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
