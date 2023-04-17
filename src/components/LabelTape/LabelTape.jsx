import React from 'react'
import PropTypes from 'prop-types';
import './labelTape.scss';

export const LabelTape = ({label, variant, ...props}) => {
	const mode = variant ? `ui-label--${variant}`: null
	return (
		<div className={['ui-label', mode].join(' ')} {...props}>{label}</div>
	)
}

LabelTape.propTypes = {
  /**
   * What color should the label be?
   */
  variant: PropTypes.oneOf(['discount', 'promotions', '4dx']),
  /**
   * Label text (Required)
   */
  label: PropTypes.string.isRequired,
};

LabelTape.defaultProps = {
  variant: 'promotions',
	label: 'Promociones'
};