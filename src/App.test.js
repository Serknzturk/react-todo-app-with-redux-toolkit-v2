import { screen } from '@testing-library/react';
import {renderWithProviders} from './test-utils.js';
import App from './App';

test('renders main App', () => {
    renderWithProviders(<App />);
    const titleElement = screen.getByRole('textbox', {name:'New Task'});
    expect(titleElement).toBeInTheDocument();
});
