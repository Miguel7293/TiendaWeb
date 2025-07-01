import React from 'react';

const FloatingCartButton = ({ onClick }) => {
  return (
    <button
      className="btn btn-primary"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        fontSize: '24px',
        zIndex: 1000,
      }}
      onClick={onClick}
    >
      🛒
    </button>
  );
};

export default FloatingCartButton;
