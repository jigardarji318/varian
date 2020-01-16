import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Home from '../components/Home';
import Login from '../components/Login';

class App extends Component {
    state = {};

    render() {
        return (

            <Router>
                {/*<Route exact path="/" component={Home} />*/}
                <Route exact path="/" component={Login} />
            </Router>
        );
    }
}

export default App;