import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';

import * as stories from './TripsGrid.stories';
import { expect } from '@storybook/test';
const { TripGrid } = composeStories(stories);

test('reuses args from composed story', () => {
  render(<TripGrid {...TripGrid.args} />);

  const buttonElement = screen.getByText('Hello world!');
  // Testing against values coming from the story itself! No need for duplication
  expect(buttonElement).toBeInTheDocument();
});
