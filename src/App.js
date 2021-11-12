import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => (
  <section className="container">
    <Router>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path="/Books">
            <Books />
          </Route>
          <Route exact path="/Categories">
            <Categories />
          </Route>
        </Switch>
      </Provider>
    </Router>
  </section>
);

export default App;
