
import React, { Component } from 'react';
import Radium from 'radium';


@Radium
export default class ToolTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      hiddenTextWidth : 0
    };
  }

  componentDidMount() {
    this.setState({
      visible: false,
      hiddenTextWidth : this.refs.hiddenText.clientWidth
    });
  }

  handleHoverIn = () => this.setState({ visible: true });

  handleHoverOut = () => this.setState({ visible: false });

  // to handle touch devices
  handleClick = () => this.setState({visible: !this.state.visible});

  handleKeyDown = (e) => {
    const keycode = e.which || e.keyCode;
    if (keycode === 13) {
      this.setState({visible: !this.state.visible});
    }
  }

  renderToolTips() {
    const stateStyles = {
      marginLeft: this.state.visible ? `-${this.state.hiddenTextWidth / 2}px` : 0
    };

    return (
        <span ref='hiddenText'
          className='ToolTips-hiddenText'
          style={this.state.visible ? [styles.visible, stateStyles] : styles.hidden}
        >
          {this.props.hiddenText}
        </span>
    );
  }

  render() {
    return (
      <span onClick={this.handleClick} onMouseEnter={this.handleHoverIn} onMouseLeave={this.handleHoverOut} onKeyDown={this.handleKeyDown} style={{position: 'relative', cursor: 'pointer'}} className="ToolTips" tabIndex="0">
        <span className='ToolTips-text'>
        {this.props.children}
        </span>
        {this.renderToolTips()}
      </span>
    );
  }

  static propTypes = {
    hiddenText: React.PropTypes.string
  }

  static defaultProps = {
    hiddenText: 'add some text'
  }
}

// Radium animation
const displayToolTips = Radium.keyframes({
  '0%': {
    transform: 'scale(0)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
}, 'displayToolTips');

// styles :
const styles = {
  visible: {
    position: 'absolute',
    zIndex: 2,
    bottom: '110%',
    left: '50%',
    padding: '0.4em',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    borderRadius: '2px',
    background: 'rgba(97, 97, 97, .9)',
    color: '#fff',
    fontWeight: '400',
    transformOrigin: 'center bottom',
    animation: 'displayToolTips 0.2s cubic-bezier(0, 0, 0.2, 1) forwards',
    animationName: displayToolTips
  },
  hidden: {
    display: 'none'
  }
};
