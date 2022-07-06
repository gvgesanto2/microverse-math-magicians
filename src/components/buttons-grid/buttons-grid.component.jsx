import PropTypes from 'prop-types';
import { Fragment } from 'react';

import './buttons-grid.styles.scss';

const ButtonsGrid = ({ buttonsRows, handleClickCallback }) => (
  <div className="buttons-grid">
    {buttonsRows.map((row, rowIndex) => (
      <Fragment key={`row-${rowIndex + 1}`}>
        {row.map((buttonName, btnIndex) => (
          <button
            type="button"
            key={buttonName}
            className={`buttons-grid__btn ${
              btnIndex === row.length - 1 ? 'buttons-grid__btn--primary' : ''
            } ${buttonName === '0' ? 'buttons-grid__btn--lg' : ''}`}
            onClick={() => {
              handleClickCallback(buttonName);
            }}
          >
            {buttonName}
          </button>
        ))}
      </Fragment>
    ))}
  </div>
);

ButtonsGrid.propTypes = {
  buttonsRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string).isRequired)
    .isRequired,
  handleClickCallback: PropTypes.func.isRequired,
};

export default ButtonsGrid;
