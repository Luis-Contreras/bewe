import { render, screen } from '@testing-library/react'
import { Label } from './index'
import '@testing-library/jest-dom/extend-expect'

it('should render a label with text', () => {
    render(<Label testId='labelTestId' type='normal'>Test</Label>)
    expect(screen.getByTestId('labelTestId')).toHaveTextContent('Test');
})
