import { screen, fireEvent, waitFor } from '@testing-library/react';
import {renderWithProviders} from '../../test-utils.js';
import App from '../../App.js';
import preloadedDbMock from '../../mocks/preloadedDbMock.js';
import serverMock from '../../mocks/serverMock.js';

describe('ToDoList should be functional', ()=> {
    renderWithProviders(<App />, preloadedDbMock);

    test('Should render to do list with mock db values.', () => {
        waitFor(()=>{
            expect(screen.queryByText(/Handle the UI/i)).toBeInTheDocument();
            expect(screen.queryByText(/Feed the cats/i)).toBeInTheDocument();
            expect(screen.queryByText(/Take the dogs out/i)).toBeInTheDocument();
            expect(screen.queryByText(/Go for shopping and get some milk/i)).toBeInTheDocument();
        });
    });

});
