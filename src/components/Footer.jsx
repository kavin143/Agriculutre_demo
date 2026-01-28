import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.footerContent}>
        <div style={styles.footerSection}>
          <div style={styles.logoSection}>
            <Leaf size={28} color="#52b788" />
            <span style={styles.logoText}>Techon Demo</span>
          </div>
          <p style={styles.description}>
            Connecting farmers with quality agricultural products and vendors.
          </p>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li>About Us</li>
            <li>Products</li>
            <li>Subscription Plans</li>
            <li>Contact</li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Contact</h3>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <Mail size={18} />
              <span>techonitsolution@gmail.com</span>
            </div>
            <div style={styles.contactItem}>
              <Phone size={18} />
              <span>+91 88077 12204</span>
            </div>
            <div style={styles.contactItem}>
              <MapPin size={18} />
              <span>Coimbatore, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <div className="container">
          <p>© 2026 Techon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'var(--dark-green)',
    color: 'var(--white)',
    padding: '3rem 0 0',
    marginTop: '4rem',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3rem',
    paddingBottom: '2rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.5rem',
    fontWeight: '800',
  },
  logoText: {
    color: 'var(--white)',
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.6',
  },
  footerTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  linkList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    color: 'rgba(255, 255, 255, 0.8)',
    cursor: 'pointer',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '1.5rem 0',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: '2rem',
  },
};

export default Footer;

