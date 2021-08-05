import React from 'react';
import Navbar from './components/navbar/Navbar';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Main from './components/main/Main';
import Gear from './components/gear/Gear';
import Poster from './components/poster/Poster';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/gear" component={Gear} />
                <Route path="/poster" component={Poster} />
            </Switch>
        </Router>
    );
}

export default App;
