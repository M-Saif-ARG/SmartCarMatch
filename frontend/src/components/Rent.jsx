import React, { useRef } from 'react';

const Rent = () => {
  const iframeRef = useRef(null);
  const externalLink = "https://smartcarmatch-rent.onrender.com/"; // Define your external link directly

  return (
    <div className="app-container">
      <div className="external-link-container">
        <iframe
          title="External Content"
          src={externalLink}
          className="external-link-iframe"
          allow="fullscreen; accelerometer; gyroscope; encrypted-media; picture-in-picture"
          ref={iframeRef}
        />
      </div>
    </div>
  );
};

export default Rent;

