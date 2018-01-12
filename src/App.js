// import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
//
// import MyFirstComponent from './MyFirstComponent'
// import Dashboard from './Dashboard'
// import Home from './Home'
//
// class App extends Component {
//     render() {
//         return (
//         <Router>
//             <div>
//                 <Link to="/">Link to main</Link><br/>
//                 <Link to="/home">Link to home</Link><br/>
//                 <Link to="/dashboard">Link to dashboard</Link><br/>
//
//                 <Route path="/" exact={true} render={
//                     () => (<MyFirstComponent name="Mateusz" showName={true} />)
//                 }/>
//                 <Route path="/home" component={Home} />
//                 <Route path="/dashboard" component={Dashboard} />
//
//             </div>
//         </Router>
//         )
//     }
// }
//
// export default App;
//
//--------------------------------------------------------------

import React from 'react'

import ComponentTwo from "./ComponentOne"

const App = () => (
    <div>
        <ComponentTwo text = "Ala ma kota" />
    </div>


)

export default App