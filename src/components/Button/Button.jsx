import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const [status, setStatus] = useState(STATUS.NORMAL);
	const mode = primary ? 'ui-button--primary' : 'ui-button--secondary';

	const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <button
      type="button"
      className={['ui-button', `ui-button--${size}`, mode].join(' ')}
			onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={backgroundColor && { backgroundColor }}
			role="ui-button"
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
