
import React from 'react';

import { Heart, Laptop, Music, Add } from '../svg';
import settings from '../settings';

const { accentColor, black } = settings;

const Footer = (props) => {
  return (
    <footer className='Footer' style={{background: props.backgroundColor}}>
      <div className='Footer-body'>
        <span style={{display: 'block', textTransform: 'uppercase'}}>Made with...</span>
        <div className='Footer-icons'>
          <span className='Footer-Heart'><Heart color={accentColor} size={40}/></span>
          <span style={{margin: '0 0.2em'}}><Add color={black} size={18}/></span>
          <span><Laptop color={black} size={45}/></span>
        </div>
        <div className='Footer-icon'>
          <span>While enjoying some
            <span className='Footer-Music' style={{display: 'inline-block', position: 'relative', top: '10px'}}><Music color={black} size={35}/></span>
          </span>
        </div>
      </div>
      <div className='Footer-overlay'>
        <span>© Alex L the developer</span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  backgroundColor: React.PropTypes.string.isRequired
};

export default Footer;
