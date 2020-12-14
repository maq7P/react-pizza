import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './scss/app.scss'
import logoSvg from './assets/img/pizza-logo.svg';
import {
    Header
} from './components'
import { Home } from './pages';

function App() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then(response => response.json())
            .then(data => {
                setData(data.pizzas)
            })
    }, [])

    console.log(data);
    return (
        <div className="wrapper">
            <Header logo={logoSvg}/>
            <div className="content">
                <Router>
                    <Route exact path='/' render={() => <Home items={data}/>}/>
                </Router>
            </div> 
        </div>
    );
}
export default App;
