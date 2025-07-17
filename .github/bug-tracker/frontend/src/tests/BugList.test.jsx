import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugList from '../components/BugList';

describe('BugList Component', () => {
    const bugs = [
        { id: 1, title: 'Bug 1', description: 'Description for bug 1', status: 'open' },
        { id: 2, title: 'Bug 2', description: 'Description for bug 2', status: 'closed' },
    ];

    test('renders BugList component', () => {
        render(<BugList bugs={bugs} />);
        const bugElements = screen.getAllByRole('listitem');
        expect(bugElements.length).toBe(bugs.length);
    });

    test('displays bug titles', () => {
        render(<BugList bugs={bugs} />);
        bugs.forEach(bug => {
            expect(screen.getByText(bug.title)).toBeInTheDocument();
        });
    });

    test('handles delete button click', () => {
        const handleDelete = jest.fn();
        render(<BugList bugs={bugs} onDelete={handleDelete} />);
        
        const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
        fireEvent.click(deleteButtons[0]);
        
        expect(handleDelete).toHaveBeenCalledWith(bugs[0].id);
    });
});