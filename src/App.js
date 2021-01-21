import React from 'react'
import {Route} from 'react-router-dom'

import {Header} from './Components'
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/cart' component={Cart}/>
      </div>
    </div>
  );
}

export default App
