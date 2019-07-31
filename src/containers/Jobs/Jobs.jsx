import React, { Component } from 'react';
import './Jobs.scss';

import Gallery from '../../components/Gallery/Gallery'

export default (props) => {
    function goToJobs() {
        console.log('Track: goToJobs');
    }

    return (
        <section className='jobs__container' id='jobs'>
            <div className='jobs__headingContainer'>
                <h2 className='sectionHeading jobs__heading'>jobs<span className='jobs__underscore'> _</span></h2>
            </div>
            <Gallery />
            <div className='jobs__advertisement'>
                <p className='jobs__adHeading'>Want to work with us?</p>
                <p className='jobs__adSubheading'>We offer many vacancies in data science & machine learning across the Axel Springer group!</p>
            </div>
            <a onClick={goToJobs} className='jobs__buttonJobs button' href="https://career.axelspringer.com/">Join us!</a>
        </section>
    );
}