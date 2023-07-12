import React, { ReactComponentElement, ReactElement } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Button } from './index'
import '@testing-library/jest-dom/extend-expect'

it('should render a button and click action', () => {
    const fn = jest.fn();
    render(<Button variant='contained' onClick={fn}>Test Button</Button>)
    const renderButton = screen.getByTestId('buttonTestId')
    fireEvent.click(renderButton); 
    expect(fn).toHaveBeenCalledTimes(1);
})

it('test disable button', () => {
    const fn = jest.fn();
    render(<Button disabled={true} onClick={fn}>Test Button</Button>)
    const renderButton = screen.getByTestId('buttonTestId') 
    fireEvent.click(renderButton); 
    expect(fn).toHaveBeenCalledTimes(0);
    expect(renderButton.closest('button')).toHaveAttribute('disabled')
})
