import { screen, fireEvent, waitFor } from '@testing-library/react';
import {renderWithProviders} from '../../test-utils.js';
import App from '../../App.js';
import preloadedDbMock from '../../mocks/preloadedDbMock.js';

describe('ToDoAdd should be functional', ()=> {
    renderWithProviders(<App />, preloadedDbMock);

    const textfield = screen.getByRole('textbox', {name:'New Task'});
    const addButton = screen.getByRole('button', {name:'Add'});

    test('Should render text field and button for adding new items', () => {
        expect(textfield).toBeInTheDocument();
        expect(addButton).toBeInTheDocument();
    });

    test('When Add button clicked, new to do item should be added with given title.', async () => {
        textfield.value = 'Update Your Calendar.';

        fireEvent.click(addButton);
        waitFor(()=>{
            expect(screen.queryByText(/Update Your Calendar/i)).toBeInTheDocument();
        });
    });

});
