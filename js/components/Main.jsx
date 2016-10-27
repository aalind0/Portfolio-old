
import React from 'react';
import { StyleRoot } from 'radium';

import Nav from 'Nav';
import Footer from 'Footer';
import settings from '../settings';

const { primaryColor } = settings;


const Main = (props) => {
  return (
    <StyleRoot>
      <Nav heading='Alex L' subHeading='front-end dev' backgroundColor={primaryColor}/>
      <div className='Main'>
        {props.children}
      </div>
      <Footer backgroundColor={primaryColor}/>
    </StyleRoot>
  );
};

export default Main;
