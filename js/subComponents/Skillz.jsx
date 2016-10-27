
import React from 'react';

import IconHeader from 'IconHeader';
import { Tool } from '../svg';
import { clFrontEnd, clBackEnd, clTools } from 'CollapsibleCollection';
import settings from '../settings';

const { grey } = settings;

const Skillz = () => {
  return (
    <div>
      <IconHeader icon={Tool} size={20} color={grey} text='My skillz'/>
      <div className='Main-textBlock'>
        <p>Let's find out what I can do, shall we?</p>
      </div>
      <div className='l-CollapsibleContainer'>
        <div className='l-CollapsibleContainer-left'>
          <div className='Collapsible-item' data-divider={true}>
            {clFrontEnd()}
          </div>
          <div className='Collapsible-item' data-divider='true'>
            {clBackEnd()}
          </div>
        </div>
        <div className='l-CollapsibleContainer-right'>
          <div className='Collapsible-item'>
            {clTools()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillz;
