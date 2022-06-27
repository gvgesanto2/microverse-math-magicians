/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import './buttons-grid.styles.scss';

export default class ButtonsGrid extends React.Component {
  render() {
    const { buttonsRows } = this.props;

    return (
      <div className="buttons-grid">
        {buttonsRows.map((row) => (
          <>
            {row.map((buttonName, btnIndex) => (
              <button
                type="button"
                key={buttonName}
                className={`buttons-grid__btn ${
                  btnIndex === row.length - 1
                    ? 'buttons-grid__btn--primary'
                    : ''
                } ${buttonName === '0' ? 'buttons-grid__btn--lg' : ''}`}
              >
                {buttonName}
              </button>
            ))}
          </>
        ))}
      </div>
    );
  }
}

ButtonsGrid.propTypes = {
  buttonsRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
};
