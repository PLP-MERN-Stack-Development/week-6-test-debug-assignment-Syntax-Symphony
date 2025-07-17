import React from 'react';
import BugList from '../components/BugList';

const Home = () => {
    return (
        <div>
            <h1>Bug Tracker</h1>
            <p>Welcome to the Bug Tracker application. You can report new bugs and view the list of reported bugs below.</p>
            <BugList />
        </div>
    );
};

export default Home;