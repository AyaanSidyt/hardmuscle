import React, { useState } from 'react';

function AI() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sticky Button */}
      <div className="sticky-button">
        <button onClick={toggleModal}>Trainer Bot</button>
      </div>

      {/* Side Modal */}
      <div className={`side-modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close-button" onClick={toggleModal}>&times;</span>
          <iframe
            src="https://app.thinkstack.ai/bot/index.html?chatbot_id=66bf296c9edc3c8e22250054"
         
            width="100%"
            height="100%"
            style={{ minHeight: '500px' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AI;

