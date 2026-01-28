import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AdminSidebar from '../components/AdminSidebar';
import { Users, Package, CreditCard, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: Users, label: 'Total Users', value: '1,234', change: '+12%', color: '#52b788' },
    { icon: Package, label: 'Active Vendors', value: '89', change: '+5%', color: '#2d6a4f' },
    { icon: CreditCard, label: 'Subscriptions', value: '456', change: '+18%', color: '#1a4d2e' },
    { icon: TrendingUp, label: 'Revenue', value: '₹2.3L', change: '+24%', color: '#74c69d' },
  ];

  const recentUsers = [
    { name: 'Rajesh Kumar', email: 'rajesh@email.com', plan: 'Premium', date: '2026-01-27' },
    { name: 'Priya Sharma', email: 'priya@email.com', plan: 'Basic', date: '2026-01-27' },
    { name: 'Amit Patel', email: 'amit@email.com', plan: 'Premium', date: '2026-01-26' },
    { name: 'Sneha Reddy', email: 'sneha@email.com', plan: 'Basic', date: '2026-01-26' },
  ];

  return (
    <div>
      <Navbar />
      
      <div style={styles.adminPage}>
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div style={styles.mainContent}>
          <div style={styles.header}>
            <h1 style={styles.title}>Dashboard Overview</h1>
            <p style={styles.date}>Tuesday, January 27, 2026</p>
          </div>

          {/* Stats Grid */}
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card" style={styles.statCard}>
                  <div style={{...styles.statIcon, background: `${stat.color}15`}}>
                    <Icon size={28} color={stat.color} />
                  </div>
                  <div style={styles.statInfo}>
                    <p style={styles.statLabel}>{stat.label}</p>
                    <h3 style={styles.statValue}>{stat.value}</h3>
                    <span style={styles.statChange}>{stat.change}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recent Users Table */}
          <div className="card" style={styles.tableCard}>
            <h2 style={styles.tableTitle}>Recent Users</h2>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeader}>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Plan</th>
                  <th style={styles.th}>Join Date</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user, index) => (
                  <tr key={index} style={styles.tableRow}>
                    <td style={styles.td}>{user.name}</td>
                    <td style={styles.td}>{user.email}</td>
                    <td style={styles.td}>
                      <span className={user.plan === 'Premium' ? 'badge badge-premium' : 'badge'}>
                        {user.plan}
                      </span>
                    </td>
                    <td style={styles.td}>{user.date}</td>
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
  adminPage: {
    display: 'flex',
    minHeight: '100vh',
    background: 'var(--off-white)',
  },
  mainContent: {
    flex: 1,
    padding: '2rem',
  },
  header: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'var(--text-dark)',
  },
  date: {
    color: 'var(--text-gray)',
    fontSize: '1rem',
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
  },
  statIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statInfo: {
    display: 'flex',
    flexDirection: 'column',
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
  statChange: {
    fontSize: '0.85rem',
    color: 'var(--light-green)',
    fontWeight: '600',
  },
  tableCard: {
    padding: '2rem',
  },
  tableTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-dark)',
    marginBottom: '1.5rem',
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
};

export default AdminDashboard;
