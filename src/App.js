import {React, useState, useEffect} from 'react';
import './index.scss';
import { Header, Home , Cart} from '../src/components/index';
import { Route } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/db.json`).then(response => {
      setPizzas(response.data.pizzas);
    });
    // fetch(`http://localhost:3000/db.json`).then((response) => console.log(response));
  }, []);


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/cart" component={Cart} />
        <Route exact path="/" render={() => <Home items = {pizzas}/>} />
      </div>
    </div>
  );
}

export default App;
