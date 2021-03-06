import './Footer.scss';
import {AboutModal} from './about-modal/AboutModal';
import React, {useContext, useState} from 'react';
import {themeContext} from '@instinct-web/core';

export function Footer() {
  const [showAbout, toggleAbout] = useState<boolean>(false);
  const {showFooter} = useContext(themeContext);

  if (!showFooter) {
    return null;
  }

  function toggleAboutModal(): void {
    toggleAbout(!showAbout);
  }

  return (
    <>
      <footer
        style={{
          clear: 'both',
          width: '100%',
          color: '#c1c1c1',
          textAlign: 'center',
          marginTop: '-2%',
        }}
      >
        <div className="footer-social-buttons flex-container flex-horizontal-center">
          <img
            alt="instinct logo"
            src="https://i.imgur.com/Bi8D2aL.png"
            onClick={toggleAboutModal}
            style={{cursor: 'pointer', marginBottom: 0}}
          />
        </div>
        <div className="footer-copyright">
          <b onClick={toggleAboutModal}>Instinct Roleplay Edition</b>
        </div>
      </footer>
      <AboutModal isOpen={showAbout} onToggle={toggleAboutModal} />
    </>
  );
}
