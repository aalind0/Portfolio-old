
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import autobind from 'autobind-decorator';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

// Material-UI
injectTapEventPlugin();

@autobind
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  renderNavListItem(dest, text, classname, tabIndex, isItIndex) {

    let tag = {
      name: isItIndex ? IndexLink : Link
    };
    return (
        <tag.name to={dest} className={classname} activeClassName='is-active' tabIndex={tabIndex}>
          {text}
        </tag.name>
    );
  }

  renderDrawerMenuItem(dest, text, classname, tabIndex, isItIndex) {
    return (
      <MenuItem innerDivStyle={{padding: '0px', whiteSpace: 'normal'}} onTouchTap={this.handleClose} tabIndex={-1}>
        {this.renderNavListItem(dest, text, classname, tabIndex, isItIndex)}
      </MenuItem>
    );
  }

  renderMenuIcon() {
    const props = this.props;

    return (
      <div className='Nav-icon'>
        <MenuIcon
          onTouchTap={this.handleToggle}
          color={props.menuIconColor}
          style={{display: 'block', cursor: 'pointer', width:`${props.menuIconSize}px`, height:`${props.menuIconSize}px`}}
        />
      </div>
    );
  }

  render() {
    const props = this.props;

    return (
      <MuiThemeProvider>
        <nav style={{backgroundColor: props.backgroundColor}} className='Nav'>
          <div className='Nav-avatar'><img src='images/avatarpic.jpg' alt='avatar pic'/></div>
          <h1 className='Nav-heading'>{props.heading}</h1>
          <div className='Nav-subHeading'>{props.subHeading}</div>
          <ul className='Nav-list'>
            <li>{this.renderNavListItem('/', 'Who Am I', 'Nav-link', 0, true)}</li>
            <li>{this.renderNavListItem('whatido', 'What I Do', 'Nav-link', 0)}</li>
            <li>{this.renderNavListItem('whativedone', `What I've Done`, 'Nav-link', 0)}</li>
            <li>{this.renderNavListItem('wheretofindme', 'Where To Find Me', 'Nav-link', 0)}</li>
          </ul>
          {this.renderMenuIcon()}
          <Drawer
              docked={false}
              width={240}
              open={this.state.open}
              style={{textTransform: 'uppercase'}}
              onRequestChange={(open) => this.setState({open})}
            >
              {this.renderDrawerMenuItem('/', 'Who Am I', 'Drawer-link', -1, true)}
              {this.renderDrawerMenuItem('whatido', 'What I Do', 'Drawer-link', -1)}
              {this.renderDrawerMenuItem('whativedone', `What I've Done`, 'Drawer-link', -1)}
              {this.renderDrawerMenuItem('wheretofindme', 'Where To Find Me', 'Drawer-link', -1)}
          </Drawer>
        </nav>
      </MuiThemeProvider>
    );
  }

  static propTypes = {
    heading: React.PropTypes.string.isRequired,
    subHeading: React.PropTypes.string.isRequired,
    backgroundColor: React.PropTypes.string.isRequired,
    menuIconSize: React.PropTypes.number,
    menuIconColor: React.PropTypes.string
  }

  static defaultProps = {
    heading: 'your name',
    subHeading: 'your job',
    menuIconSize: 40,
    menuIconColor: '#fff'
  }
}
