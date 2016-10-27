
import React from 'react';

import CardReveal, { Reveal } from 'CardReveal';
import settings from '../settings';

const { git } = settings;


export const BubblyBoilerplate = () => {
  return (
    <CardReveal blinkIcon={true} iconColor='#000' href={git+'bubbly-boilerplate'} footerText="there's more inside">
      <h3 className='CardReveal-title'>Bubbly Boilerplate</h3>
      <span className='CardReveal-subTitle'>homemade starter kit</span>
      <Reveal>
      <p className='Reveal-header'>Recipe :</p>
      <ul className='Reveal-list'>
        <li>React / Redux</li>
        <li>Gulp</li>
        <li>Jade</li>
        <li>Stylus / Sass</li>
        <li>PostCSS</li>
      </ul>
      <p className='Reveal-footer'>I made this boilerplate to help me getting started with new projects easily.
      </p>
      </Reveal>
    </CardReveal>
  );
};

export const BubblyGrid = () => {
  return (
    <CardReveal blinkIcon={true} iconColor='#000' href={git+'bubbly-grid'}
      footerText={<span>available on <a className='u-link u-highlight' href='https://www.npmjs.com/package/bubbly-grid-stylus' target='_blank'>npm</a></span>}>
      <h3 className='CardReveal-title'>Bubbly Grid</h3>
      <span className='CardReveal-subTitle'>homemade grid system</span>
      <Reveal>
      <p className='Reveal-header'>Recipe :</p>
      <ul className='Reveal-list'>
        <li>Stylus</li>
        <li>Sass</li>
      </ul>
      <p className='Reveal-footer'>This grid system is built with calc() and is inspired by
      <a href='https://github.com/peterramsing/lost' target='_blank' className='u-highlight u-linkSweep'> LostGrid.</a>
      </p>
      </Reveal>
    </CardReveal>
  );
};

export const Portfolio = () => {
  return (
    <CardReveal blinkIcon={true} iconColor='#000' href={git+'portfolio'} footerText="there's more inside">
    <h3 className='CardReveal-title'>Me</h3>
    <span className='CardReveal-subTitle'>myself and I</span>
    <Reveal>
    <p className='Reveal-header'>Recipe :</p>
    <ul className='Reveal-list'>
      <li>Bubbly Boilerplate</li>
      <li>Bubbly Grid</li>
      <li>Stylus</li>
    </ul>
    </Reveal>
    </CardReveal>
  );
};

export const VinylMinded = () => {
  return (
    <CardReveal blinkIcon={true} iconColor='#000' href='http://alex-l.com/vinylminded/' footerText="there's more inside">
      <h3 className='CardReveal-title'>Vinyl Minded</h3>
      <span className='CardReveal-subTitle'>fake e-commerce site</span>
      <Reveal>
        <p className='Reveal-header'>Recipe :</p>
        <ul className='Reveal-list'>
          <li>Foundation Framework</li>
          <li>Sass</li>
          <li>jQuery</li>
          <li>PHP / MySQL</li>
        </ul>
        <p className='Reveal-footer'>This site was made to obtain my certification as a web developer from IFOCOP.</p>
      </Reveal>
    </CardReveal>
  );
};

export const NRJMobile = () => {
  return (
    <CardReveal alt={true} blinkIcon={true} iconColor='#000' href='https://www.nrjmobile.fr/' footerText="there's more inside">
      <h3 className='CardReveal-title'>NRJ Mobile</h3>
      <span className='CardReveal-subTitle'>4 months during 2015</span>
      <Reveal>
      <p className='Reveal-header'>Tasks :</p>
      <ul className='Reveal-list'>
        <li>Develop landing pages</li>
        <li>Code email newsletters</li>
      </ul>
      </Reveal>
    </CardReveal>
  );
};
