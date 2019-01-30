import React from 'react';
import './Footer.scss';

import Socials from '../../components/Socials/Socials'

export default (props) => {
  return (
    <footer className='footer__container'>
      <div className='footer__content'>
        <Socials />
        <p className='footer__links'>
          <a href='https://www.axelspringer.com/de/impressum'>Impressum</a>
          <a href='https://www.axelspringer.com/de/datenschutzerklaerung'>Hinweise zum Datenschutz</a>
        </p>
      </div>
    </footer>
  );
}