import React from 'react';
import './Footer.scss';

var FontAwesome = require('react-fontawesome');

export default (props) => {
  return (
    <footer className='footer__container'>
      <div className='footer__content'>
        <p>
            <a href='https://twitter.com/axelspringer_EN' className='footer__item'><FontAwesome name='twitter' /></a>
            <a href='https://tech.axelspringer.com/' className='footer__item'><FontAwesome name='pencil' /></a>
            <a href='https://www.linkedin.com/company/axel-springer-se/' className='footer__item'><FontAwesome name='linkedin' /></a>
            <a href='https://www.instagram.com/axel_springer_karriere/' className='footer__item'><FontAwesome name='instagram' /></a>
            <a href='https://www.facebook.com/AxelSpringerKarriere/' className='footer__item'><FontAwesome name='facebook' /></a>
        </p>
        <p id='blockCopy'>&copy; 2019 Axel Springer Ideas Engineering</p>
        <p className='footer__links'>
          <a href='https://www.axelspringer.com/en/imprint'>Imprint</a>
          <a href='https://www.axelspringer.com/en/data-and-privacy'>Data & Privacy</a>
        </p>
      </div>
    </footer>
  );
}