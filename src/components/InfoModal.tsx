import React from 'react';
import { useEffect } from 'react';

/* Interfaces */
import InfoModalProps from '../interfaces/InfoModalProps';

/* Constants */
import stringValues from '../constants/string-values';

/* Styles */
import '../styles/info-modal.css';

function InfoModal(props: InfoModalProps): React.JSX.Element {
  const keydown = 'keydown';
  const keyEscape = 'Escape';

  useEffect(() => {
    function keyDownHandler({ key }: KeyboardEvent): void {
      if (key === keyEscape && props.isModalDisplayed) props.onClickCloseButton();
    }
    window.addEventListener(keydown, keyDownHandler);
    return function cleanupEventListener() {
      window.removeEventListener(keydown, keyDownHandler);
    };
  }, [props, props.isModalDisplayed]);

  return (
    <div className="info-modal-container">
      <div className="info-modal">
        <div className="info-modal-header">
          <button
            name="close"
            className="info-modal-close"
            onClick={props.onClickCloseButton}>
            <svg
              viewBox="30 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon fill="#fff" points={stringValues.svgPaths.closingX}/>
            </svg>
          </button>
        </div>
        <div className="info-modal-message">
          <span>Thanks for your message!</span>
          <span>We'll get back to you soon.</span>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
