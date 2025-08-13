import React from "react";
import '../CSS/Loading.css';

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="shared-loading-container">
      <div className="shared-spinner"></div>
      <p className="shared-loading-message">{message}</p>
    </div>
  );
};

export default Loading;
