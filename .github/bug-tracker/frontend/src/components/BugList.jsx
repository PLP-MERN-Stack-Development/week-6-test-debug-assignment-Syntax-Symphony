import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BugList = () => {
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        const fetchBugs = async () => {
            try {
                const response = await axios.get('/api/bugs');
                setBugs(response.data);
            } catch (error) {
                console.error('Error fetching bugs:', error);
            }
        };

        fetchBugs();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/bugs/${id}`);
            setBugs(bugs.filter(bug => bug._id !== id));
        } catch (error) {
            console.error('Error deleting bug:', error);
        }
    };

    const handleUpdate = async (id, updatedBug) => {
        try {
            const response = await axios.put(`/api/bugs/${id}`, updatedBug);
            setBugs(bugs.map(bug => (bug._id === id ? response.data : bug)));
        } catch (error) {
            console.error('Error updating bug:', error);
        }
    };

    return (
        <div>
            <h2>Bug List</h2>
            <ul>
                {bugs.map(bug => (
                    <li key={bug._id}>
                        <h3>{bug.title}</h3>
                        <p>{bug.description}</p>
                        <button onClick={() => handleUpdate(bug._id, { ...bug, status: 'resolved' })}>
                            Mark as Resolved
                        </button>
                        <button onClick={() => handleDelete(bug._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BugList;