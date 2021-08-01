import React from 'react';
import Navbar from './components/navbar/Navbar';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Main from './components/main/Main';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/gear" component={() => <h1>Gear</h1>} />
            </Switch>
        </Router>
    );
}

export default App;
