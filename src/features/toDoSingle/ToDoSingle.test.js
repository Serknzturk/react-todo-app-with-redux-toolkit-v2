import { screen, fireEvent, waitFor } from '@testing-library/react';
import {renderWithProviders} from '../../test-utils.js';
import ToDoSingle from './ToDoSingle.js';
import preloadedDbMock from '../../mocks/preloadedDbMock.js';
import serverMock from '../../mocks/serverMock.js';

describe('SingleToDo Elements should be functional', ()=> {
    test('Should render Single Item.', () => {
        renderWithProviders(<ToDoSingle itemData={preloadedDbMock.preloadedState.allToDos.todos[0]} />, preloadedDbMock);
        const listCheckingInput = screen.getByRole('checkbox');

        expect(listCheckingInput).toBeInTheDocument();
        expect(screen.getByText(/Handle the UI/i)).toBeInTheDocument();
    });

    test('Single Item should be removed by clicking on remove.', async () => {
        renderWithProviders(<ToDoSingle itemData={preloadedDbMock.preloadedState.allToDos.todos[0]} />, preloadedDbMock);

        fireEvent.click(screen.getByRole('button', { name: /delete/i }));
        waitFor(()=>{
            expect(screen.queryByText(/Handle the UI/i)).not.toBeInTheDocument();
        });
    });

    test('Single Item can be checked/unchecked', async () => {
        renderWithProviders(<ToDoSingle itemData={preloadedDbMock.preloadedState.allToDos.todos[0]} />, preloadedDbMock);

        const completeCheck = screen.getByRole('checkbox', { id: 'complete-check-0' });
        fireEvent.click(completeCheck);
        waitFor(()=>{
            expect(completeCheck).toBeChecked();
        });
    });
});
