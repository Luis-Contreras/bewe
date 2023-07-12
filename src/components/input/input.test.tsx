
import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from './index'
import '@testing-library/jest-dom/extend-expect'

it('should render a input and onChange action', () => {
    const onChange = jest.fn();
    render(<Input id='test' type='text' testId="idInput" onChange={(e) => onChange(e.target.value)} />)
    const renderInput = screen.getByTestId('idInput') 
    fireEvent.change(renderInput, {
        target: { value: "Changed Value" }
    });
    expect(onChange).toBeCalledWith("Changed Value");
})
