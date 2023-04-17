import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Movie } from './Movie';

afterEach(()=>{
	cleanup
})

test("All Basic Features", ()=> {
	const { getByRole } = render(<Movie variant="discount" movieTitle="test-01"/>);

	const movie = getByRole('ui-movie')
	expect(movie).toHaveAttribute("role", "ui-movie");
	expect(movie).toHaveTextContent("test-01");
	expect(movie).toBeInTheDocument();

	const movieImage = getByRole('ui-movie-img');
	expect(movie).toContainElement(movieImage);

	const movieTitle = getByRole('ui-movie-title');
	expect(movieTitle).toHaveClass('ui-movie-title--discount');
})

it('Renders correctly', () => {
	const tree = renderer
		.create(<Movie variant="discount" movieTitle="test-01"/>)
		.toJSON();
	
	expect(tree.props.role).toBe('ui-movie');
	expect(tree).toMatchSnapshot();
})

it('Renders correctly as 4DX', () => {
	const tree = renderer
		.create(<Movie variant="4dx" movieTitle="test-02"/>)
		.toJSON();

	expect(tree).toMatchSnapshot();
})

it('Renders correctly as Promotions', () => {
	const tree = renderer
		.create(<Movie variant="promotions" movieTitle="test-03"/>)
		.toJSON();

	expect(tree).toMatchSnapshot();
})