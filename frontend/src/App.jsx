import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes'; // Assuming you have a Routes component for routing
import './App.css';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <HomePage />
            </div>
        </Router>
    );
}

export default App;
