import React from 'react'
import PropTypes from 'prop-types';

// Components
import { LabelTape } from '../LabelTape';

// Styles
import './Movie.scss';

export const Movie = ({variant, label, movieTitle, src, ...props}) => {
	return (
		<div className='ui-movie' {...props} role="ui-movie">
			<div className="ui-movie-img" role="ui-movie-img">
				<img src={src} alt={movieTitle} className="ui-movie-img-asset"/>
				{variant != undefined &&
					<LabelTape label={label} variant={variant} />
				}
			</div>
			<div className={['ui-movie-title', `ui-movie-title--${variant}`].join(' ')} role="ui-movie-title">
				<h4 className='ui-movie-title-text'>
					{movieTitle}
				</h4>
			</div>
		</div>
	)
}

Movie.propTypes = {
  /**
   * Defines label background colors.
   */
  variant: PropTypes.oneOf(['discount', 'promotions', '4dx']),
  /**
   * Label text
   */
  label: PropTypes.string,
	/**
   * Movie title (Required)
   */
  movieTitle: PropTypes.string.isRequired,
};