import React from 'react';
// import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';


test("Render con React-test", ()=> {
	render(<Button label="Aló"/>);
	const buttonElement = screen.getByRole("ui-button");
	expect(buttonElement).toHaveTextContent("Aló");
	expect(buttonElement).toHaveAttribute("role", "ui-button")
})