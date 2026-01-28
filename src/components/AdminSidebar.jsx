import React from 'react';
import { LayoutDashboard, Users, Package, CreditCard, MessageSquare, Settings } from 'lucide-react';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'vendors', icon: Package, label: 'Vendors' },
    { id: 'subscriptions', icon: CreditCard, label: 'Subscriptions' },
    { id: 'chats', icon: MessageSquare, label: 'Chats' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div style={styles.sidebar}>
      <div style={styles.sidebarHeader}>
        <h2 style={styles.title}>Admin Panel</h2>
      </div>

      <nav style={styles.nav}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                ...styles.navItem,
                ...(activeTab === item.id ? styles.activeNavItem : {}),
              }}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '280px',
    background: 'var(--white)',
    borderRight: '1px solid var(--border-color)',
    height: '100vh',
    position: 'sticky',
    top: 0,
  },
  sidebarHeader: {
    padding: '2rem',
    borderBottom: '1px solid var(--border-color)',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--primary-green)',
  },
  nav: {
    padding: '1rem',
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
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  activeNavItem: {
    background: 'var(--light-gray)',
    color: 'var(--primary-green)',
  },
};

export default AdminSidebar;
