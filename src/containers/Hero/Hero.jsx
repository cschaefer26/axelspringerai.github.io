import React, { Component } from 'react';
import './Hero.scss';

import Socials from '../../components/Socials/Socials'
import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage';

export default (props) => {
  function scrollDown() {
    let navHeight = document.querySelector('nav').offsetHeight;
    let elemOffset = document.querySelector('#home').getBoundingClientRect().bottom + window.pageYOffset

    window.scrollTo(0, elemOffset - navHeight);
  }

  return (
    <header className='hero__container' id='home'>
      <ProgressiveImage className='hero__image' src='static/header.jpg' thumbnail='static/thumbnails/header.jpg' />

      <div className='hero__imageContainer'>
        <div className='hero__bottomContainer'>
          <p className='hero__bottomText'>Axel Springer AI.</p>
          <Socials className='hero__socials' />
        </div>
        {/*<img className='hero__scrollDown' src='static/arrow.png' onClick={scrollDown} />*/}
      </div>
      <p className='hero__text'>
        <strong>Axel Springer AI</strong> is the artificial intelligence unit of <mark><a href="https://www.axelspringer.com/" target="_blank">Axel Springer SE</a></mark>, one of the largest digital publishing house in Europe. Our mission is to make AI accessible to everyone and hence drive innovations. We deliver end-to-end machine learning projects and conduct state of the art AI research. Our research focus ranges from traditional machine learning to modern deep learning. We mainly employ open-source technologies for our work. We also like to give talks on conferences and share our knowledge frequently. If you'd like to work with us then please <mark><a href="mailto:dat.tran@idealo.de">contact us</a></mark>!
      </p >
    </header >
  );
}