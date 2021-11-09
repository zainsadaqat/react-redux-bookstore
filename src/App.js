import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './components/categories/categories';
import Books from './components/books/Books';

function App() {
  return (
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
  );
}

export default App;
