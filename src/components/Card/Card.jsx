import React from 'react'
import PropTypes from 'prop-types';

// Components

// Styles
import './Card.scss';

export const Card = ({title, children, ...props}) => {
	return (
		<div className='ui-card' {...props}>
			<h3 className='ui-card-title'>{title}</h3>
			{children}
		</div>
	)
}

Card.propTypes = {
  /**
   * Defines Title of Card.
   */
  title: PropTypes.string,
};

Card.defaultProps = {
	title: 'Hi'
}