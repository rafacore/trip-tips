import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { expect } from '@storybook/test';

it('should have Next Js app text', () => {
    render(<Home />)

    const myElem = screen.getByText('Next Js app')
    expect(myElem).toBeInTheDocument()
})