import React from 'react';
import Navbar from './components/navbar/Navbar';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Main from './components/main/Main';
import Gear from './components/gear/Gear';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/gear" component={Gear} />
            </Switch>
        </Router>
    );
}

export default App;
