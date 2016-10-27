
import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import IconHeader from 'IconHeader';
import { History } from '../svg';
import CardList from 'CardList';
import * as Cards from 'CardCollection';
import settings from '../settings';

const { accentColor, grey } = settings;


@autobind
export default class WhatIveDone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterJobs: false,
      filterSideProjects: false
    };
  }

  filterJobs = () => this.setState({filterJobs: !this.state.filterJobs})

  filterSideProjects = () => this.setState({filterSideProjects: !this.state.filterSideProjects})

  renderFilterBtn(func, state, text) {
    return (
      <button className='FilterBtn'
        style={state ? styles.btn.active : styles.btn.inactive} onClick={func}
        tabIndex="0"
      >
        {text}
      </button>
    );
  }

  render() {
    const state = this.state;
    const { filterJobs, filterSideProjects } = this.state;

    return (
      <div className='WhatIveDone'>
        <IconHeader icon={History} size={20} color={grey} text='My work'/>
        <div className='Main-textBlock'>
          <p>Here is what I've done so far :</p>
        </div>
        <div className="WhatIveDone-filters">
          <span>show :</span>
          {this.renderFilterBtn(this.filterSideProjects, state.filterSideProjects, 'side projects')}
          {this.renderFilterBtn(this.filterJobs, state.filterJobs, 'jobs')}
        </div>
        <div>
          <CardList collectionToRender={Cards} filterJobs={filterJobs} filterSideProjects={filterSideProjects}/>
        </div>
      </div>
    );
  }
}

// styles
const styles = {
  btn: {
    active: {
      background: accentColor,
      borderColor: 'transparent',
      color: '#fff'
    },
    inactive: {
      background: 'transparent'
    }
  }
};
