/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import './button.styles.scss';

class Button extends React.Component {
  render() {
    const { buttonData } = this.props;

    return (
      <button
        type="button"
        className={`btn ${buttonData.addtionalClasses} ${
          buttonData.isPrimary ? 'btn--primary' : ''
        }`}
      >
        {buttonData.name}
      </button>
    );
  }
}

Button.propTypes = {
  buttonData: PropTypes.shape({
    name: PropTypes.string,
    isPrimary: PropTypes.bool,
    addtionalClasses: PropTypes.string,
  }).isRequired,
};

export default Button;
