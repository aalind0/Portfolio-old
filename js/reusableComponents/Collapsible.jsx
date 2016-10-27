
import React, { Component } from 'react';
import Radium from 'radium';
import Collapse from 'react-collapse';

import { Expand } from '../svg';


@Radium
export default class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  handleKeyDown = (e) => {
    const keycode = e.which || e.keyCode;
    if (keycode === 13) {
      this.setState({open: !this.state.open});
    }
  }

  renderIcon = () => {
    let props = this.props;
    if (props.titleIcon) {
      return (
        <span className='Collapsible-titleIcon' style={styles.titleIcon}>
          <props.titleIcon style={{display:'block'}} color={props.iconColor} size={props.titleIconSize}/>
        </span>
      );
    }
    // usage :
    //  import { AnIcon } from '../svg';
    //  <Collapsible titleIcon={AnIcon}>...</Collapsible>
  }

  renderHr = () => {
    const { open } = this.state;
    return (
        <hr ref='hr' style={open ? styles.hr : [styles.hr, styles.hr.closing]} className='Collapsible-hr'/>
    );
  }

  render() {
    const { open } = this.state,
          props    = this.props;

    return (
      <div
        aria-expanded={open}
        style={[
          styles.base,
          props.popOut ? styles.popOut.easing : null,
          props.popOut ? open ? styles.popOut.open : styles.popOut.close : null
        ]}
        className={props.popOut ? 'Collapsible popOut' : 'Collapsible'}
      >
        <div style={styles.title} onKeyDown={this.handleKeyDown} className='Collapsible-title' onClick={this.handleClick} tabIndex="0">
          <div style={styles.titleLeft} className='Collapsible-titleLeft'>
            {this.renderIcon()}
            <span style={styles.titleText} className='Collapsible-titleText'>{props.title}</span>
          </div>
          <div style={styles.titleRight} className='Collapsible-titleRight'>
            <span style={[styles.expandIcon, open ? styles.expandLess : null]} className='Collapsible-expandIcon'>
              <Expand color={props.iconColor} size={props.iconSize}/>
            </span>
          </div>
          {this.renderHr()}
        </div>
          <Collapse
            isOpened={open}
            springConfig={{stiffness: 400, damping: 30}}
            onHeightReady={()=> this.refs.collapse.style.display = 'block'}
          >
            <div ref='collapse' style={{padding: '16px', display: 'none'}}>
              {props.children}
            </div>
          </Collapse>
      </div>
    );
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    popOut: React.PropTypes.bool,
    iconSize: React.PropTypes.number,
    iconColor: React.PropTypes.string,
    titleIcon: React.PropTypes.func,
    titleIconSize: React.PropTypes.number
  }

  static defaultProps = {
    popOut: false,
    iconSize: 24,
    iconColor: '#000',
    titleIconSize: 24
  }
}

// styles
const styles = {
  base: {
    overflow: 'hidden',
    borderRadius: '2px',
    boxShadow: `rgba(0, 0, 0, 0.117647) 0px 1px 6px,
      rgba(0, 0, 0, 0.117647) 0px 1px 4px`
  },
  popOut: {
    easing: {
      transition: 'margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    open: {
      margin: '16px 0',
      boxShadow: `0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15)`
    },
    close: {
      margin: '0 24px'
    }
  },
  title: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '16px',
    cursor: 'pointer'
  },
  titleLeft: {
    flex: '1 0 80%'
  },
  titleRight: {
    flex: '0 0 20%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },
  titleIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '16px'
  },
  titleText: {
    verticalAlign: 'middle'
  },
  expandIcon: {
    position: 'relative',
    padding: '0.2em'
  },
  expandLess: {
    transform: 'scaleY(-1)'
  },
  hr: {
    position:'absolute',
    left:'16px',
    right:'24px',
    bottom:'-8px',
    borderTop: 'none',
    borderBottom: '1px solid #e0e0e0',
    transform: 'translateX(0)',
    transition: 'transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0.7s', // easing = easeOutQuart
    closing: {
      transform: 'translateX(-120%)',
      transition: 'none'
    }
  }
};
