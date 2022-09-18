import React, {Component} from 'react';
import {Router, Route, Routes} from 'react-router'
import Navlink from 'react-router-dom'

import './App.css';
import Search from "./pages/Search";

// function App() 
// {
//     return (
      
//     <Router>
//         <header>TEST</header>
        
//         <div>
//         <Routes>
//             <Route path = "/Search" element = {<Search/>}/>
//         </Routes>
//         </div>
//     </Router>
//   );
// }

class App extends Component
{
    render()
    {
    return (
        <Router>
            <h1>test</h1>
            <Navlink to = "/Search"></Navlink>

        </Router>
    );
    }
}

export default App;
