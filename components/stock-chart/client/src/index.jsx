import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import css from './assets/main.css';


const AppRouter = () => (
  <Router>
    <Switch>
      <Route path='/stocks/:stockId' component={App} />
      <Route path='/' component={App} />
    </Switch>
  </Router>
)

// window.AppRouter = App;
ReactDOM.render(<AppRouter />, document.getElementById('stock-chart'));
