import React from 'react';
import './Socials.scss';

var FontAwesome = require('react-fontawesome');

export default (props) => {
    return (
        <p className={'socials__container ' + props.className}>
            <a href='https://twitter.com/axelspringer_EN' className='socials__item'><FontAwesome name='twitter' /></a>
            <a href='https://medium.com/axel-springer-tech' className='socials__item'><FontAwesome name='medium' /></a>
            <a href='https://www.linkedin.com/company/axel-springer-ai/about/' className='socials__item'><FontAwesome name='linkedin' /></a>
            <a href='https://www.instagram.com/axel_springer_karriere/' className='socials__item'><FontAwesome name='instagram' /></a>
            <a href='https://www.facebook.com/AxelSpringerKarriere/' className='socials__item'><FontAwesome name='facebook' /></a>
        </p>
    );
}