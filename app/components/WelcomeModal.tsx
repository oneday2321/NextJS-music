import React, { useState } from 'react';

const WelcomeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2>欢迎使用本项目！</h2>
        <p>感谢您选择我们的应用。如果您有任何问题，请随时联系支持团队。</p>
        <button onClick={onClose} style={styles.closeButton}>关闭</button>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default WelcomeModal;