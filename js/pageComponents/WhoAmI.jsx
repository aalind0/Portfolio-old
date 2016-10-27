
import React from 'react';

import IconHeader from 'IconHeader';
import { Face } from '../svg';
import settings from '../settings';

const { grey } = settings;

const WhoAmI = () => {
  return (
    <div className='WhoAmI'>
      <IconHeader icon={Face} size={20} color={grey} text='Hello World'/>
      <div className='Main-textBlock--extended'>
        <p>
          Let me introduce myself, I am <span className='u-highlight'>Alex</span>, a junior <span className='u-highlight'>front-end web dev</span>.
        </p>
        <p>
          I used to handle stock, and also customer complaints at an electronics store, but after a few years I just wasn't happy with this job of mine.
        </p>
        <p>
          I wanted to do something that allowed me to let my <span className='u-highlight'>creativity</span> speak, I wanted to build things, leave a mark (little as an ink stain will do) on this world.
        </p>
        <p>
          And I discovered that <span className='u-highlight'>web development</span> give me all that. Being able to code things that potentially the whole world can see and interact with, it's just a really nice feeling, isn't it ?
        </p>
        <p>So, hello world, and welcome to my world <span className='u-highlight'>O_O</span></p>
      </div>
    </div>
  );
};

export default WhoAmI;
