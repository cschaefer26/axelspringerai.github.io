import React from 'react';
import './Footer.scss';

var FontAwesome = require('react-fontawesome');

export default (props) => {
  return (
    <footer className='footer__container'>
      <div className='footer__content'>
        <p>
            <a href='https://www.xing.com/companies/axelspringerse' className='footer__item'><FontAwesome name='xing' /></a>
            <a href='https://de.linkedin.com/company/axel-springer-se' className='footer__item'><FontAwesome name='linkedin' /></a>
            <a href='https://www.instagram.com/axel_springer_karriere/' className='footer__item'><FontAwesome name='instagram' /></a>
            <a href='https://www.facebook.com/AxelSpringerKarriere/' className='footer__item'><FontAwesome name='facebook' /></a>
        </p>
        <p className='footer__links'>
          <a href='https://www.axelspringer.com/en/imprint'>Imprint</a>
          <a href='https://www.axelspringer.com/en/data-and-privacy'>Data & Privacy</a>
        </p>
      </div>
    </footer>
  );
}