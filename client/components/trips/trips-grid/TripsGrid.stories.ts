import type { Meta, StoryObj } from '@storybook/react';
import TripsGrid, { ITripsGrid } from './TripsGrid';
import { mockTripsGridProps } from './TripsGrid.mocks';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'trips/TripsGrid',
  component: TripsGrid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof TripsGrid>;

export default meta;
type BaseT = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TripGrid: BaseT = {
  args: {
    ...mockTripsGridProps.base,
  } as ITripsGrid,
};
