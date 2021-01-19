import React from 'react'
import {Route} from 'react-router-dom'
import axios from "axios";

import {useDispatch} from 'react-redux'

import {Header} from './Components'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {setPizzas} from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get(`http://localhost:3001/pizzas`)
      .then(({data}) => {
        dispatch(setPizzas(data))
      })
  }, [])

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
