// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState('desktop');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleDownloadClick = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg'; // Specify the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderGridContent = () => {
    switch (activeButton) {
      case 'desktop':
        return (
          <>
            <div className="grid-item">
              <img
                src="https://placekitten.com/150/150" // Replace with your image URL
                alt="Desktop Image 1"
              />
              <div className="button-container">
                <button
                  className="action-button"
                  onClick={() =>
                    handleDownloadClick('https://placekitten.com/150/150')
                  }
                >
                  <i className="material-icons">cloud_download</i>
                </button>
                <button className="action-button" title="Print">
                  <i className="material-icons">print</i>
                </button>
              </div>
              <div className="size-text">Size</div>
            </div>
            
            <div className="grid-item">
              <img
                src="https://placekitten.com/150/150" // Replace with your image URL
                alt="Desktop Image 1"
              />
              <div className="button-container">
                <button
                  className="action-button"
                  onClick={() =>
                    handleDownloadClick('https://placekitten.com/150/150')
                  }
                >
                  <i className="material-icons">cloud_download</i>
                </button>
                <button className="action-button" title="Print">
                  <i className="material-icons">print</i>
                </button>
              </div>
              <div className="size-text">Size</div>
            </div>

            <div className="grid-item">
              <img
                src="https://placekitten.com/150/150" // Replace with your image URL
                alt="Desktop Image 1"
              />
              <div className="button-container">
                <button
                  className="action-button"
                  onClick={() =>
                    handleDownloadClick('https://placekitten.com/150/150')
                  }
                >
                  <i className="material-icons">cloud_download</i>
                </button>
                <button className="action-button" title="Print">
                  <i className="material-icons">print</i>
                </button>
              </div>
              <div className="size-text">Size</div>
            </div>
          </>
        );
      
        case 'tablet':
        return (
          <>
            <div className="grid-item">
              <img
                src="https://placekitten.com/150/150" // Replace with your image URL
                alt="Desktop Image 1"
              />
              <div className="button-container">
                <button
                  className="action-button"
                  onClick={() =>
                    handleDownloadClick('https://placekitten.com/150/150')
                  }
                >
                  <i className="material-icons">cloud_download</i>
                </button>
                <button className="action-button" title="Print">
                  <i className="material-icons">print</i>
                </button>
              </div>
              <div className="size-text">Size</div>
            </div>
            
            <div className="grid-item">
              <img
                src="https://placekitten.com/150/150" // Replace with your image URL
                alt="Desktop Image 1"
              />
              <div className="button-container">
                <button
                  className="action-button"
                  onClick={() =>
                    handleDownloadClick('https://placekitten.com/150/150')
                  }
                >
                  <i className="material-icons">cloud_download</i>
                </button>
                <button className="action-button" title="Print">
                  <i className="material-icons">print</i>
                </button>
              </div>
              <div className="size-text">Size</div>
            </div>

            <div className="grid-item">
              <img
                src="https://placekitten.com/150/150" // Replace with your image URL
                alt="Desktop Image 1"
              />
              <div className="button-container">
                <button
                  className="action-button"
                  onClick={() =>
                    handleDownloadClick('https://placekitten.com/150/150')
                  }
                >
                  <i className="material-icons">cloud_download</i>
                </button>
                <button className="action-button" title="Print">
                  <i className="material-icons">print</i>
                </button>
              </div>
              <div className="size-text">Size</div>
            </div>
          </>
        );

        case 'phone':
        return (
          <>
            <div className="grid-item">
              <img
                src="https://placekitten.com/150/150" // Replace with your image URL
                alt="Desktop Image 1"
              />
              <div className="button-container">
                <button
                  className="action-button"
                  onClick={() =>
                    handleDownloadClick('https://placekitten.com/150/150')
                  }
                >
                  <i className="material-icons">cloud_download</i>
                </button>
                <button className="action-button" title="Print">
                  <i className="material-icons">print</i>
                </button>
              </div>
              <div className="size-text">Size</div>
            </div>
            
            <div className="grid-item">
              <img
                src="https://placekitten.com/150/150" // Replace with your image URL
                alt="Desktop Image 1"
              />
              <div className="button-container">
                <button
                  className="action-button"
                  onClick={() =>
                    handleDownloadClick('https://placekitten.com/150/150')
                  }
                >
                  <i className="material-icons">cloud_download</i>
                </button>
                <button className="action-button" title="Print">
                  <i className="material-icons">print</i>
                </button>
              </div>
              <div className="size-text">Size</div>
            </div>

            <div className="grid-item">
              <img
                src="https://placekitten.com/150/150" // Replace with your image URL
                alt="Desktop Image 1"
              />
              <div className="button-container">
                <button
                  className="action-button"
                  onClick={() =>
                    handleDownloadClick('https://placekitten.com/150/150')
                  }
                >
                  <i className="material-icons">cloud_download</i>
                </button>
                <button className="action-button" title="Print">
                  <i className="material-icons">print</i>
                </button>
              </div>
              <div className="size-text">Size</div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="hero-section">
        <h1>Welcome to My Web App</h1>
        <p>This is the hero section of the web app.</p>
      </div>

      <div className="tab-container">
        <button
          className={`tab-button ${activeButton === 'desktop' && 'active'}`}
          onClick={() => handleButtonClick('desktop')}
        >
          <i className="material-icons">desktop_mac</i>
          Desktop
        </button>
        <button
          className={`tab-button ${activeButton === 'tablet' && 'active'}`}
          onClick={() => handleButtonClick('tablet')}
        >
          <i className="material-icons">tablet_mac</i> Tablet
        </button>

        <button
          className={`tab-button ${activeButton === 'phone' && 'active'}`}
          onClick={() => handleButtonClick('phone')}
        >
          <i className="material-icons">phone_android</i> Phone
        </button>
      </div>

      <div className="grid-container">{renderGridContent()}</div>
    </div>
  );
}

export default App;
