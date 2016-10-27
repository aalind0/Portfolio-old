
import React, { Component } from 'react';
import Radium from 'radium';

import {More, Close, Blink} from '../svg';


// inner component that will be rendered inside CardReveal
export const Reveal = (props) => <div className='Reveal' style={{overflow: 'hidden'}}>{props.children}</div>;

// usage :
//   <CardReveal>
//     I'm visible
//     <Reveal>
//       I'm hidden until you change the state
//     </Reveal>
//   </CardReveal>


@Radium
export default class CardReveal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  renderContent(innerComponent) {
    const { children } = this.props;

    if (children.length > 1) {
      return innerComponent ? children.filter(el => typeof el.type === 'function') :
      children.filter(el => typeof el.type !== 'function');
    }
    return <div>Please use the &lt;Reveal&#47;&gt; component to add some content inside the card</div>;
  }

  handleClick = () => this.setState({open: !this.state.open})

  handleKeyDown = (e) => {
    const keycode = e.which || e.keyCode;
    if (keycode === 13) {
      this.setState({open: !this.state.open});
    }
  }

  renderBlinkIcon() {
    const props = this.props;
    if (props.blinkIcon) {
      return (
        <span style={styles.icons.base}>
          <a href={props.href} target='_blank' tabIndex={this.state.open ? -1 : 0}>
            <Blink color={props.iconColor}/>
          </a>
        </span>
      );
    }
  }

  renderReveal() {
    const {open} = this.state;
    return (
      <div ref='reveal' style={open ? [styles.reveal, styles.reveal.open] : [styles.reveal, styles.reveal.close]} className='CardReveal-reveal' aria-hidden={!this.state.open}>
        <span style={[styles.icons.base, styles.icons.close]} onClick={this.handleClick} onKeyDown={this.handleKeyDown} tabIndex={open ? 0 : -1}>
          <Close color={this.props.iconColor}/>
        </span>
        {this.renderContent(Reveal)}
      </div>
    );
  }

  render() {
    const {alt, footerText, iconColor} = this.props;

    return (
      <div style={styles.base} className='CardReveal' data-alt={alt}>
        <div className='CardReveal-content'>
          {this.renderContent()}
        </div>
        <div style={styles.footer} className='CardReveal-footer'>
          <div style={styles.footerText} className='CardReveal-footerText'>
            {footerText}
          </div>
          <div style={styles.iconContainer} className='CardReveal-iconContainer'>
            <span onClick={this.handleClick} onKeyDown={this.handleKeyDown} style={styles.icons.base} tabIndex="0">
              <More color={iconColor}/>
            </span>
            {this.renderBlinkIcon()}
          </div>
        </div>
        {this.renderReveal()}
      </div>
    );
  }

  static propTypes = {
    iconColor: React.PropTypes.string,
    blinkIcon: React.PropTypes.bool,
    href: React.PropTypes.string,
    footerText: React.PropTypes.node,
    alt: React.PropTypes.bool
  }

  static defaultProps = {
    iconColor: '#fff',
    blinkIcon: false,
    href: '',
    footerText: '',
    alt: false
  }
}

// styles
const styles = {
  base: {
    position: 'relative',
    overflow: 'hidden',
    boxShadow: `0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12)`,
    borderRadius: '2px'
  },
  reveal: {
    position: 'absolute',
    top: '100%',
    right: '0px',
    left: '0px',
    height: '100%',
    padding: '16px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    borderRadius: '2px',
    transition: 'all 0.225s cubic-bezier(0.455, 0.03, 0.515, 0.955)', // easing = easeInOutQuad
    open: {
      transform: 'translateY(-100%)'
    },
    close: {
      transform: 'translateY(0%)'
    }
  },
  iconContainer: {
    float: 'right',
    width: '10%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icons: {
    base: {
      display: 'block',
      marginBottom: '10px',
      cursor: 'pointer'
    },
    close: {
      float: 'right'
    }
  },
  footer: {
    overflow: 'hidden',
    padding: '24px 16px',
    borderTop: '1px solid rgba(158, 158, 158, 0.5)'
  },
  footerText: {
    float: 'left',
    width: '90%'
  }
};
