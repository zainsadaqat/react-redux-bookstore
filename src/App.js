import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/books/Books';
import Categories from './components/categories/categories';
import Navbar from './components/navbar/Navbar';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
