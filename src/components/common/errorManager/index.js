import React from 'react';
import PropTypes from 'prop-types';

export class ErrorManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let st = {
      'display': (this.props.text && this.props.text.length > 0)
        ? 'block'
        : 'none'
    }
    return (
      <div className=''>
        {this.props.children}
        <div className='errorMsg' style={st}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

ErrorManager.propTypes = {
  text: PropTypes.string.isRequired
};

