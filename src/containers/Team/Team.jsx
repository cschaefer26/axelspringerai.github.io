import React, { Component } from 'react';
import './Team.scss';

var FontAwesome = require('react-fontawesome');

export default (props) => {
    return (
        <section className='team__container' id='team'>
        <h2 className='sectionHeading team__heading'>Team<span className='team__underscore'>_</span></h2>
          <div className='team__row'>
            <div className='team__column'>
              <div className='team__card'>
                <img className='team__img' src='static/dat.jpg' />
                <div className='team__bottomContainer'>
                  <h2>Dat Tran</h2>
                  <p className='team__title'>Head of AI</p>
                  <br />
                  <p><a href='mailto:dat.tran@axelspringer.com' className='team__item'><FontAwesome name='envelope' /></a></p>
                  <p><a href='https://www.linkedin.com/in/dat-tran-a1602320/' className='team__item'><FontAwesome name='linkedin' /></a></p>
                </div>
              </div>
            </div>
            <div className='team__column'>
              <div className='team__card'>
                <img className='team__img' src='static/francesco.jpg' />
                <div className='team__bottomContainer'>
                  <h2>Francesco Cardinale</h2>
                  <p className='team__title'>Machine Learning Engineer</p>
                  <br />
                  <p><a href='mailto:francesco.cardinale@axelspringer.com' className='team__item'><FontAwesome name='envelope' /></a></p>
                  <p><a href='https://www.linkedin.com/in/francesco-cardinale-a47b9888/' className='team__item'><FontAwesome name='linkedin' /></a></p>
                </div>
              </div>
            </div>
            <div className='team__column'>
              <div className='team__card'>
                <img className='team__img' src='static/malgorzata.jpg' />
                <div className='team__bottomContainer'>
                  <h2>Malgorzata Adamczyk</h2>
                  <p className='team__title'>Machine Learning Engineer</p>
                  <br />
                  <p><a href='mailto:malgorzata.adamczyk@axelspringer.com' className='team__item'><FontAwesome name='envelope' /></a></p>
                  <p><a href='https://www.linkedin.com/in/ma%C5%82gorzata-adamczyk-65b949a0/' className='team__item'><FontAwesome name='linkedin' /></a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}