import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../utils/languageContext';
import { 
  Package, 
  Plus, 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  MessageSquare,
  Edit,
  Trash2
} from 'lucide-react';

const VendorDashboard = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('products');

  const stats = [
    { icon: Package, label: 'Total Products', value: '24', color: '#52b788' },
    { icon: ShoppingBag, label: 'Orders', value: '156', color: '#2d6a4f' },
    { icon: DollarSign, label: 'Revenue', value: '₹1.2L', color: '#1a4d2e' },
    { icon: TrendingUp, label: 'Growth', value: '+18%', color: '#74c69d' },
  ];

  const myProducts = [
    {
      id: 1,
      name: 'Organic Rice Seeds',
      category: 'Seeds',
      price: 1200,
      stock: 500,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c',
    },
    {
      id: 2,
      name: 'NPK Fertilizer',
      category: 'Fertilizer',
      price: 850,
      stock: 200,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449',
    },
    {
      id: 3,
      name: 'Bio Pesticide',
      category: 'Pesticide',
      price: 650,
      stock: 0,
      status: 'out-of-stock',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d',
    },
  ];

  return (
    <div>
      <Navbar />
      
      <div style={styles.vendorPage}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>{t('vendorPanel')}</h2>
          <nav style={styles.nav}>
            <button
              style={{...styles.navItem, ...(activeTab === 'products' ? styles.activeNavItem : {})}}
              onClick={() => setActiveTab('products')}
            >
              <Package size={20} />
              {t('myProducts')}
            </button>
            <button
              style={{...styles.navItem, ...(activeTab === 'orders' ? styles.activeNavItem : {})}}
              onClick={() => setActiveTab('orders')}
            >
              <ShoppingBag size={20} />
              {t('orders')}
            </button>
            <button
              style={{...styles.navItem, ...(activeTab === 'messages' ? styles.activeNavItem : {})}}
              onClick={() => setActiveTab('messages')}
            >
              <MessageSquare size={20} />
              {t('messages')}
            </button>
            <button
              style={{...styles.navItem, ...(activeTab === 'analytics' ? styles.activeNavItem : {})}}
              onClick={() => setActiveTab('analytics')}
            >
              <TrendingUp size={20} />
              {t('analytics')}
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <div style={styles.header}>
            <h1 style={styles.title}>{t('myProducts')}</h1>
            <button className="btn btn-primary" style={styles.addBtn}>
              <Plus size={20} />
              {t('addProduct')}
            </button>
          </div>

          {/* Stats */}
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card" style={styles.statCard}>
                  <div style={{...styles.statIcon, background: `${stat.color}15`}}>
                    <Icon size={28} color={stat.color} />
                  </div>
                  <div>
                    <p style={styles.statLabel}>{stat.label}</p>
                    <h3 style={styles.statValue}>{stat.value}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Products Table */}
          <div className="card" style={styles.productsCard}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeader}>
                  <th style={styles.th}>Product</th>
                  <th style={styles.th}>Category</th>
                  <th style={styles.th}>Price</th>
                  <th style={styles.th}>Stock</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myProducts.map((product) => (
                  <tr key={product.id} style={styles.tableRow}>
                    <td style={styles.td}>
                      <div style={styles.productCell}>
                        <img src={product.image} alt={product.name} style={styles.productImage} />
                        <span style={styles.productName}>{product.name}</span>
                      </div>
                    </td>
                    <td style={styles.td}>{product.category}</td>
                    <td style={styles.td}>₹{product.price}</td>
                    <td style={styles.td}>{product.stock} kg</td>
                    <td style={styles.td}>
                      <span className={product.status === 'active' ? 'badge' : 'badge'} style={{
                        background: product.status === 'active' ? 'var(--light-green)' : '#ffebee',
                        color: product.status === 'active' ? 'var(--white)' : '#c62828',
                      }}>
                        {product.status}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.actions}>
                        <button style={styles.actionBtn} title="Edit">
                          <Edit size={18} />
                        </button>
                        <button style={{...styles.actionBtn, color: '#c62828'}} title="Delete">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  vendorPage: {
    display: 'flex',
    minHeight: '100vh',
    background: 'var(--off-white)',
  },
  sidebar: {
    width: '280px',
    background: 'var(--white)',
    borderRight: '1px solid var(--border-color)',
    padding: '2rem',
    position: 'sticky',
    top: 0,
    height: '100vh',
  },
  sidebarTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--primary-green)',
    marginBottom: '2rem',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 1.25rem',
    background: 'transparent',
    color: 'var(--text-gray)',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    textAlign: 'left',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  activeNavItem: {
    background: 'var(--light-gray)',
    color: 'var(--primary-green)',
  },
  mainContent: {
    flex: 1,
    padding: '2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'var(--text-dark)',
  },
  addBtn: {
    padding: '1rem 2rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  statCard: {
    padding: '1.5rem',
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  statIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: 'var(--text-gray)',
    marginBottom: '0.25rem',
  },
  statValue: {
    fontSize: '1.75rem',
    fontWeight: '900',
    color: 'var(--text-dark)',
  },
  productsCard: {
    padding: '2rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    background: 'var(--off-white)',
  },
  th: {
    padding: '1rem',
    textAlign: 'left',
    fontWeight: '700',
    color: 'var(--text-dark)',
    borderBottom: '2px solid var(--border-color)',
  },
  tableRow: {
    borderBottom: '1px solid var(--border-color)',
  },
  td: {
    padding: '1rem',
    color: 'var(--text-gray)',
  },
  productCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  productImage: {
    width: '50px',
    height: '50px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  productName: {
    fontWeight: '600',
    color: 'var(--text-dark)',
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
  },
  actionBtn: {
    padding: '0.5rem',
    background: 'transparent',
    border: 'none',
    borderRadius: '8px',
    color: 'var(--primary-green)',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default VendorDashboard;
