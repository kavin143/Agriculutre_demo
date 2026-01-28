import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

const ChatBox = ({ vendor, messages, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.chatHeader}>
        <div style={styles.vendorInfo}>
          <div style={styles.avatar}>{vendor.name[0]}</div>
          <div>
            <h3 style={styles.vendorName}>{vendor.name}</h3>
            <span style={styles.status}>Active now</span>
          </div>
        </div>
      </div>

      <div style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div 
            key={index} 
            style={{
              ...styles.messageWrapper,
              justifyContent: msg.isUser ? 'flex-end' : 'flex-start',
            }}
          >
            <div 
              style={{
                ...styles.messageBubble,
                ...(msg.isUser ? styles.userMessage : styles.vendorMessage),
              }}
            >
              <p style={styles.messageText}>{msg.text}</p>
              <span style={styles.messageTime}>{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.inputContainer}>
        <button style={styles.iconButton}>
          <Paperclip size={22} color="var(--text-gray)" />
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          style={styles.input}
        />
        <button style={styles.iconButton}>
          <Smile size={22} color="var(--text-gray)" />
        </button>
        <button 
          className="btn btn-primary" 
          style={styles.sendButton}
          onClick={handleSend}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '600px',
    background: 'var(--white)',
    borderRadius: '16px',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
  },
  chatHeader: {
    padding: '1.5rem',
    borderBottom: '1px solid var(--border-color)',
    background: 'var(--off-white)',
  },
  vendorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--primary-green), var(--light-green))',
    color: 'var(--white)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    fontWeight: '700',
  },
  vendorName: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
  },
  status: {
    fontSize: '0.85rem',
    color: 'var(--light-green)',
    fontWeight: '600',
  },
  messagesContainer: {
    flex: 1,
    padding: '1.5rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  messageWrapper: {
    display: 'flex',
    width: '100%',
  },
  messageBubble: {
    maxWidth: '70%',
    padding: '0.875rem 1.25rem',
    borderRadius: '18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  userMessage: {
    background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))',
    color: 'var(--white)',
    borderBottomRightRadius: '4px',
  },
  vendorMessage: {
    background: 'var(--light-gray)',
    color: 'var(--text-dark)',
    borderBottomLeftRadius: '4px',
  },
  messageText: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  messageTime: {
    fontSize: '0.75rem',
    opacity: 0.7,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    padding: '1.5rem',
    borderTop: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: 'var(--off-white)',
  },
  input: {
    flex: 1,
    padding: '0.875rem 1.25rem',
    border: '2px solid var(--border-color)',
    borderRadius: '24px',
    fontSize: '1rem',
    background: 'var(--white)',
    transition: 'all 0.3s ease',
  },
  iconButton: {
    padding: '0.5rem',
    background: 'transparent',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s ease',
  },
  sendButton: {
    padding: '0.875rem 1.25rem',
    borderRadius: '24px',
  },
};

export default ChatBox;
