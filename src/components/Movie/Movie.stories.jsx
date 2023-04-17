import React from "react";

// Components
import { Movie } from "./Movie";
import { Card } from "../Card";

export default {
	title: 'ui/Movie',
	component: Movie,
	decorators: [story => <Card title="Movie Component">{story()}</Card>]
}

const Template = (args) => <Movie {...args} />;

export const Cartel = Template.bind({});

Cartel.args = {
	label: 'Promociones',
	variant: undefined,
	movieTitle: 'Movie 01',
	src: 'https://static.cinepolis.com/img/peliculas/41818/1/1/41818.jpg'
}


export const CartelSinopsis = Template.bind({});

CartelSinopsis.args = {
	label: '4DX',
	variant: '4dx',
	movieTitle: 'Preventa',
	src: 'https://static.cinepolis.com/img/peliculas/41041/1/1/41041.jpg'
}
