import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ChatBox from '../components/ChatBox';

const VendorChat = () => {
  const vendor = {
    name: 'Green Valley Seeds Co.',
    status: 'active',
  };

  const [messages, setMessages] = useState([
    {
      text: 'Hello! How can I help you today?',
      time: '10:30 AM',
      isUser: false,
    },
    {
      text: 'Hi! I\'m interested in the Organic Rice Seeds. Can you provide bulk pricing?',
      time: '10:32 AM',
      isUser: true,
    },
    {
      text: 'Sure! For orders above 100kg, we offer 15% discount. For 500kg+, it\'s 25% off.',
      time: '10:33 AM',
      isUser: false,
    },
  ]);

  const handleSendMessage = (message) => {
    const newMessage = {
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true,
    };
    setMessages([...messages, newMessage]);

    // Simulate vendor response
    setTimeout(() => {
      const vendorReply = {
        text: 'Thank you for your message. Let me check that for you.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: false,
      };
      setMessages(prev => [...prev, vendorReply]);
    }, 1500);
  };

  return (
    <div>
      <Navbar />
      
      <div style={styles.chatPage}>
        <div className="container">
          <h1 style={styles.title}>Vendor Chat</h1>
          <p style={styles.subtitle}>Communicate directly with vendors</p>

          <div style={styles.chatContainer}>
            <ChatBox 
              vendor={vendor} 
              messages={messages} 
              onSendMessage={handleSendMessage} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  chatPage: {
    minHeight: '80vh',
    padding: '3rem 0',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'var(--text-dark)',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-gray)',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  chatContainer: {
    maxWidth: '900px',
    margin: '0 auto',
  },
};

export default VendorChat;
