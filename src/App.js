import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './scss/app.scss'
import logoSvg from './assets/img/pizza-logo.svg';
import {
    Header
} from './components'
import { Home, Cart } from './pages';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header logo={logoSvg}/>
                <div className="content">
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/cart' component={Cart}/>
                </div>
            </div>
        </Router>
    );
}
export default App;
