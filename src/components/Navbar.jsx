import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/authContext';
import { useLanguage } from '../utils/languageContext';
import { Leaf, User, LogOut, LayoutDashboard, Globe, Store } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAdmin, isVendor } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={styles.navbar}>
      <div className="container" style={styles.navContainer}>
        <Link to="/" style={styles.logo}>
          <Leaf size={32} color="#1a4d2e" />
          <span style={styles.logoText}>Techon Demo</span>
        </Link>

        <div style={styles.navLinks}>
          {user ? (
            <>
              <Link to="/dashboard" style={styles.navLink}>
                <LayoutDashboard size={20} />
                {t('dashboard')}
              </Link>
              <Link to="/plans" style={styles.navLink}>
                {t('plans')}
              </Link>
              {isVendor && (
                <Link to="/vendor" style={styles.navLink}>
                  <Store size={20} />
                  {t('vendorPanel')}
                </Link>
              )}
              {isAdmin && (
                <Link to="/admin" style={styles.navLink}>
                  {t('admin')}
                </Link>
              )}
              
              {/* Language Selector */}
              <div style={styles.langSelector}>
                <button 
                  style={styles.langButton}
                  onClick={() => setShowLangMenu(!showLangMenu)}
                >
                  <Globe size={20} />
                  <span>{language === 'en' ? 'EN' : 'த'}</span>
                </button>
                {showLangMenu && (
                  <div style={styles.langMenu}>
                    <button 
                      style={styles.langOption}
                      onClick={() => {
                        toggleLanguage('en');
                        setShowLangMenu(false);
                      }}
                    >
                      English
                    </button>
                    <button 
                      style={styles.langOption}
                      onClick={() => {
                        toggleLanguage('ta');
                        setShowLangMenu(false);
                      }}
                    >
                      தமிழ்
                    </button>
                  </div>
                )}
              </div>

              <div style={styles.userSection}>
                <User size={20} />
                <span>{user.name}</span>
                <button onClick={handleLogout} style={styles.logoutBtn} title={t('logout')}>
                  <LogOut size={18} />
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/plans" style={styles.navLink}>
                {t('plans')}
              </Link>
              
              {/* Language Selector for Non-logged Users */}
              <div style={styles.langSelector}>
                <button 
                  style={styles.langButton}
                  onClick={() => setShowLangMenu(!showLangMenu)}
                >
                  <Globe size={20} />
                  <span>{language === 'en' ? 'EN' : 'த'}</span>
                </button>
                {showLangMenu && (
                  <div style={styles.langMenu}>
                    <button 
                      style={styles.langOption}
                      onClick={() => {
                        toggleLanguage('en');
                        setShowLangMenu(false);
                      }}
                    >
                      English
                    </button>
                    <button 
                      style={styles.langOption}
                      onClick={() => {
                        toggleLanguage('ta');
                        setShowLangMenu(false);
                      }}
                    >
                      தமிழ்
                    </button>
                  </div>
                )}
              </div>

              <Link to="/login">
                <button className="btn btn-outline" style={styles.loginBtn}>
                  {t('login')}
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-primary">
                  {t('getStarted')}
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: 'var(--white)',
    borderBottom: '1px solid var(--border-color)',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: 'var(--shadow)',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--primary-green)',
  },
  logoText: {
    background: 'linear-gradient(135deg, var(--primary-green), var(--light-green))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-dark)',
    transition: 'color 0.3s ease',
  },
  langSelector: {
    position: 'relative',
  },
  langButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'var(--light-gray)',
    borderRadius: '8px',
    fontWeight: '600',
    color: 'var(--primary-green)',
    transition: 'all 0.3s ease',
  },
  langMenu: {
    position: 'absolute',
    top: '110%',
    right: 0,
    background: 'var(--white)',
    boxShadow: 'var(--shadow-hover)',
    borderRadius: '12px',
    overflow: 'hidden',
    minWidth: '120px',
  },
  langOption: {
    width: '100%',
    padding: '0.75rem 1.25rem',
    textAlign: 'left',
    background: 'transparent',
    color: 'var(--text-dark)',
    fontWeight: '600',
    transition: 'background 0.3s ease',
    borderBottom: '1px solid var(--border-color)',
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.5rem 1rem',
    background: 'var(--light-gray)',
    borderRadius: '12px',
    fontWeight: '600',
    color: 'var(--primary-green)',
  },
  logoutBtn: {
    padding: '0.5rem',
    background: 'transparent',
    color: 'var(--primary-green)',
    borderRadius: '8px',
  },
  loginBtn: {
    padding: '0.75rem 1.5rem',
  },
};

export default Navbar;
