import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';

import * as stories from './TripItem.stories';
import { expect } from '@storybook/test';
const { Card } = composeStories(stories);

test('reuse args from composed story', () => {
  render(<Card {...Card.args} />);

  const buttonElement = screen.getByText('Hello world!');
  // Testing against values coming from the story itself! No need for duplication
  expect(buttonElement).toBeInTheDocument();
});
