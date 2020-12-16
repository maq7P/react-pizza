import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './scss/app.scss'
import logoSvg from './assets/img/pizza-logo.svg';
import {
    Header
} from './components'
import { Home } from './pages';

function App() {
    return (
        <div className="wrapper">
            <Header logo={logoSvg}/>
            <div className="content">
                <Router>
                    <Route exact path='/' component={Home}/>
                </Router>
            </div>
        </div>
    );
}
export default App;
