import React from "react";

import { Card } from "./Card";

export default {
	title: 'Decorators/Card',
	component: Card,
}

const Template = (args) => <Card {...args}>
	Testing Children
</Card>;

export const CardParent = Template.bind({});

CardParent.args = {
	title: 'Hello'
}