import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';

import * as stories from './Header.stories';
import { expect } from '@storybook/test';
const { Template } = composeStories(stories);

test('reuses args from composed story', () => {
  render(<Template {...Template.args} />);

  const buttonElement = screen.getByText('Hello world!');
  // Testing against values coming from the story itself! No need for duplication
  expect(buttonElement).toBeInTheDocument();
});
