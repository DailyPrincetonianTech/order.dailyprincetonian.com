import React from 'react';
import Navbar from './components/navbar/Navbar';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={() => <h1>Home</h1>} />
                <Route path="/gear" component={() => <h1>Gear</h1>} />
            </Switch>
        </Router>
    );
}

export default App;
