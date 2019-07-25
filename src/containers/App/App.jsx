import React from 'react';
import './App.scss';
import ReactGA from 'react-ga';

import Navigation from '../Navigation/Navigation'
import Hero from '../Hero/Hero'
import Team from '../Team/Team'
import Projects from '../Projects/Projects'
import Jobs from '../Jobs/Jobs'
import Footer from '../Footer/Footer'

ReactGA.initialize('UA-133956643-2');
ReactGA.pageview(window.location.pathname + window.location.search);

export default (props) => {
    return (
        <article className='app__container'>
            <Navigation />
            <Hero />
            <Team />
            <Projects />
            <Jobs />
            <Footer />
        </article>
    );
}