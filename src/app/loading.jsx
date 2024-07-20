import React from 'react';
import './Loading.css'; // Import the loading-specific CSS file

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="loading-text">Loading</div>
    </div>
  );
};

export default Loading;
