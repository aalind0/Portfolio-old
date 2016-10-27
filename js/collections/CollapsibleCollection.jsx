import React from 'react';

import Collapsible from 'Collapsible';
import { BackEnd, Code, FrontEnd, Movie, Music, Pencil, People, SupaHappy, ThumbUp, TV } from '../svg';
import settings from '../settings';

const { greyDarken } = settings;


export const clFrontEnd = () => {
  return (
    <Collapsible titleIcon={FrontEnd} iconColor={greyDarken} titleIconSize={35} title='Front-end' popOut={true}>
      <ul className='Collapsible-list'>
        <li>HTML5</li>
        <li>Jade</li>
        <li>CSS3 / Flexbox</li>
        <li>Stylus</li>
        <li>Sass</li>
        <li>PostCSS</li>
      </ul>
      <p className='Collapsible-text'>
        To organize my stylesheets, I try to follow the SMACSS guidelines and the SUIT CSS naming conventions.
      </p>
        <Collapsible titleIcon={Code} iconColor={greyDarken} titleIconSize={35} title='JS'>
          <ul className="Collapsible-list">
            <li>ES5 / ES6</li>
            <li>React / Redux</li>
          </ul>
        </Collapsible>
        <Collapsible titleIcon={Pencil} iconColor={greyDarken} titleIconSize={35} title='Design'>
          <ul className="Collapsible-list">
            <li>Sketch</li>
            <li>Photoshop</li>
          </ul>
        </Collapsible>
      </Collapsible>
  );
};

export const clBackEnd = () => {
  return (
    <Collapsible titleIcon={BackEnd} iconColor={greyDarken} titleIconSize={35} title='Back-end' popOut={true}>
      <ul className="Collapsible-list">
        <li>Node.js / Express (wip)</li>
        <li>PHP5</li>
        <li>mySQL</li>
      </ul>
    </Collapsible>
  );
};

export const clTools = () => {
  return (
    <Collapsible titleIcon={ThumbUp} iconColor={greyDarken} titleIconSize={30} title='Tools I like' popOut={true}>
      <ul className="Collapsible-list">
        <li>iTerm2</li>
        <li>Gulp</li>
        <li>Webpack</li>
        <li>ESLint</li>
        <li>Heroku</li>
      </ul>
      <p className="Collapsible-text">
        And if you must know, I work on a MacBook Pro, using Atom as my code editor.
      </p>
    </Collapsible>
  );
};

export const clMusic = () => {
  return (
    <Collapsible titleIcon={Music} iconColor={greyDarken} titleIconSize={35} title='Music' popOut={true}>
      <p className='Collapsible-text'>
        Music is so many things, it can soothe you, move you, make you move, annoy you or even make you fall asleep, it's just fundamental :)
      </p>
      <Collapsible iconColor={greyDarken} title='Rap'>
        <p className='Collapsible-text'>
          Of course this is not an exhaustive list :
        </p>
        <ul className='Collapsible-list'>
          <li>ASAP Mob (not all of 'em...)</li>
          <li>TDE</li>
          <li>Chance the Rapper (he's like Kanye before Kanye became a Kardashian...)</li>
          <li>Young Thug (maybe not the genius some claim he is, but really is interesting)</li>
          <li>Big K.R.I.T.</li>
          <li>Cam'ron, The Wu-Tang Clan, The Notorious B.I.G, Kurupt...(never forget what time it is ;)</li>
        </ul>
      </Collapsible>
      <Collapsible iconColor={greyDarken} title='B-Side'>
        <p className='Collapsible-text'>
          All right, now get ready for the dummy mix, no rules, just me, my taste and no filter :
        </p>
        <ul className='Collapsible-list'>
          <li>Taylor Swift (yep...sh*t happens)</li>
          <li>YouTube singers (I mean, not every one of them of course, but love the idea of someone not being signed to a major label and still being able to reach millions of people)</li>
          <li>Blink-182 (didn't even listen to them as a teen, but man they're good)</li>
          <li>Frank Ocean</li>
          <li>Jhene Aiko</li>
          <li>The Killers</li>
          <li>...</li>
        </ul>
      </Collapsible>
    </Collapsible>
  );
};

export const clTVMovies = () => {
  return (
    <Collapsible titleIcon={TV} iconColor={greyDarken} titleIconSize={35} title='Netflix & ...' popOut={true}>
      <p className="Collapsible-text">
        Another non exhaustive list :
      </p>
      <ul className="Collapsible-list">
        <li>Stranger Things</li>
        <li>GoT (what did you expect...)</li>
        <li>Daredevil</li>
        <li>Mr. Robot</li>
        <li>The Man in the High Castle</li>
        <li>Orange is the new black</li>
        <li>American Dad</li>
        <li>...</li>
      </ul>
      <Collapsible titleIcon={Movie} iconColor={greyDarken} titleIconSize={35} title='Movies'>
      <p className="Collapsible-text">
        Maybe not my favorites of all time, but the ones that pop into my head as I'm writing this.
      </p>
      <ul className="Collapsible-list">
        <li>Pitch Perfect (nerd alert!)</li>
        <li>Kick-ass</li>
        <li>50/50</li>
        <li>Carlito's Way</li>
        <li>End of watch</li>
        <li>22 Jump Street</li>
        <li>...</li>
      </ul>
      </Collapsible>
    </Collapsible>
  );
};

export const clPeople = () => {
  return (
    <Collapsible titleIcon={People} iconColor={greyDarken} titleIconSize={35} title='Following...' popOut={true}>
      <p className="Collapsible-text">
        Some devs / designers I follow, look up to, and/or like :
      </p>
      <ul className="Collapsible-list">
        <li><a href='https://medium.com/@mpjme' target='_blank' className='u-linkSweep'>Mattias Petter Johansson</a></li>
        <li><a href='https://www.youtube.com/user/wesbos' target='_blank' className='u-linkSweep'>Wes Bos</a></li>
        <li><a href='https://bitsofco.de/' target='_blank' className='u-linkSweep'>Ire Aderinokun</a></li>
        <li><a href='http://hugogiraudel.com/' target='_blank' className='u-linkSweep'>Hugo Giraudel</a></li>
        <li><a href='http://www.travandlos.com/' target='_blank' className='u-linkSweep'>Travis Neilson & Carlos Montoya</a></li>
        <li><a href='https://una.im/' target='_blank' className='u-linkSweep'>Una Kravets</a></li>
        <li><a href='http://lea.verou.me/' target='_blank' className='u-linkSweep'>Lea Verou</a></li>
        <li><a href='http://valhead.com/blog/' target='_blank' className='u-linkSweep'>Val Head</a></li>
      </ul>
    </Collapsible>
  );
};

export const clMisc = () => {
  return (
    <Collapsible titleIcon={SupaHappy} iconColor={greyDarken} titleIconSize={35} title='Misc' popOut={true}>
      <p className='Collapsible-text'>
        And of course, I like to have my 5 vegetables a day (I mean, it feels good when I do...).
      </p>
      <p className="Collapsible-text">
        And last but not least, I like people (again, not every single one of them, my heart is not that big), I mean music, tv series, your opinion about what's happening on the other side of the world and stuff is great...
      </p>
      <p className="Collapsible-text">
        But what's greater is when you get to share (and disagree with) all that with someone else, otherwise, what's the point, right?
      </p>
    </Collapsible>
  );
};
