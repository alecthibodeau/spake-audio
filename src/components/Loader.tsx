import React from 'react';

/* Styles */
import '../styles/loader.css';

function Loader(): React.JSX.Element {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
