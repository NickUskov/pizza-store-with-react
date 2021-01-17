import React from 'react'
import {Route} from 'react-router-dom'
import axios from "axios";

import {Header} from './Components'
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {

  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get(`http://localhost:3000/db.json`)
      .then(res => setPizzas(res.data.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path='/' render={() => <Home pizzas={pizzas}/>}/>
        <Route exact path='/cart' component={Cart}/>
      </div>
    </div>
  );
}

export default App;
