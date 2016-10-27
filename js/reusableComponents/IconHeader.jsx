
import React from 'react';
// require styles from '_IconHeader.styl'

const IconHeader = (props) => {
  return (
    <div className='IconHeader'>
      <h2 className='IconHeader-heading'>
        <span className='IconHeader-icon'><props.icon color={props.color} size={props.size}/></span>
        <span className='IconHeader-text'>{props.text}</span>
      </h2>
    </div>
  );
};

IconHeader.propTypes = {
  text: React.PropTypes.string.isRequired,
  icon: React.PropTypes.func.isRequired,
  color: React.PropTypes.string,
  size: React.PropTypes.number
};

IconHeader.defaultProps = {
  color: '#000',
  size: 35
};

export default IconHeader;
