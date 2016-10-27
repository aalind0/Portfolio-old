
import React from 'react';

import IconHeader from 'IconHeader';
import { Heart } from '../svg';
import { clMusic, clTVMovies, clMisc, clPeople } from 'CollapsibleCollection';
import settings from '../settings';

const { grey } = settings;

const Likes = () => {
  return (
    <div>
      <IconHeader icon={Heart} size={20} color={grey} text='My likes'/>
      <div className='Main-textBlock'>
        <p>While we're at it, why not get a glance about some stuff I heart...</p>
      </div>
      <div className='l-CollapsibleContainer'>
        <div className='l-CollapsibleContainer-left'>
          <div className='Collapsible-item' data-divider={true}>
            {clMusic()}
          </div>
          <div className='Collapsible-item' data-divider={true}>
            {clTVMovies()}
          </div>
        </div>
        <div className='l-CollapsibleContainer-right'>
          <div className="Collapsible-item" data-divider={true}>
            {clPeople()}
          </div>
          <div className='Collapsible-item'>
            {clMisc()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Likes;
