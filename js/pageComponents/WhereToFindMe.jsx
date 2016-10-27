
import React from 'react';

import IconHeader from 'IconHeader';
import { PersonPin } from '../svg';
import ToolTips from 'ToolTips';
import settings from '../settings';

const { email, grey } = settings;


const WhereToFindMe = () => {
  return (
    <div className='WhereToFindMe'>
    <IconHeader icon={PersonPin} size={20} color={grey} text='Finding me' />
      <div className='Main-textBlock--extended'>
        <p>You can find me wandering in the streets of
        <ToolTips hiddenText='FR, not TX ;)'> Paris.</ToolTips>
        </p>
        <p>But since that could take a while before you randomly bump into me, feel free to send me an email :
          <br/>
          <a className='WhereToFindMe-email' href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          Wanna take a peek at my repos ?
          <br/>
          <a href='https://github.com/Alx-l' target='_blank' className='IconBtn' style={{display: 'inline-block'}}>
            <img className='IconBtn-icon' src='images/github.svg' alt='github'/>
          </a>
        </p>
        <p>
          My
        <a href='https://gist.github.com/Alx-l' target='_blank'>
          <span className='u-highlight u-linkSweep'> Gists </span>
        </a>
          maybe ?
        </p>
      </div>
    </div>
  );
};

export default WhereToFindMe;
