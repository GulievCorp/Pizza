import React from 'react';
import { useState, useEffect } from 'react';
import './index.scss';
import { Header, Home, Cart } from '../src/components/index';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPizzas as setPizzasAction } from './actions/pizzas';
import PropTypes from 'prop-types';

// function App() {
//   useEffect(() => {
//     axios.get(`http://localhost:3000/db.json`).then((response) => {
//       setPizzas(response.data.pizzas);
//     });
//     // fetch(`http://localhost:3000/db.json`).then((response) => console.log(response));
//   }, []);

//   return ;
// }

class App extends React.Component {
  
  componentDidMount() {
    axios.get(`http://localhost:3000/db.json`).then((response) => {
      this.props.setPizzas(response.data.pizzas);
    });
  }

  render() {
  
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/cart" component={Cart} />
          <Route exact path="/" render={() => <Home items={this.props.items} />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
