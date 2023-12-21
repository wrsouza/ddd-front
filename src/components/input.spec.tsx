import { render, screen } from '@testing-library/react';
import { Input } from '../../src/components/input';

describe('Input', () => {
    test('renders Input component', async () => {
        const props = {
            id: 'name',
            name: 'name',
            label: 'Name',
            'data-testid': 'name',
        }
        render(<Input {...props} />);

        const labelElement = await screen.findByText(props.label);
        expect(labelElement).toBeInTheDocument();
        
        const inputElement = await screen.findByTestId(props['data-testid']);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('name', props.name);
        expect(inputElement).toHaveAttribute('id', props.id);
    });
});
