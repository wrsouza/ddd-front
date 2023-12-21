import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe('Button', () => {
    test('renders Button component', async () => {
        const props = {
            label: 'Send',
            'data-testid': 'submit',
        }
        render(<Button {...props} />);

        const labelElement = await screen.findByText(props.label);
        expect(labelElement).toBeInTheDocument();
        
        const inputElement = await screen.findByTestId(props['data-testid']);
        expect(inputElement).toBeInTheDocument();
    });
})