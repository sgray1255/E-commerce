import './App.css';
import Products from './containers/Products/Products';
import SearchProvider from './context/SearchContext/SearchContext';
import  Header  from './containers/Header/Header';
import  { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import styles from "./App.module.scss";
import styles from "./containers/Products/Products.module.scss";
import Home from "./containers/Home/Home";
import Product from "./containers/Product/Product";


function App() {

  
  return (
  
    <Router>
    <SearchProvider>
      <Header />
      <Switch>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/products">
          <Products className={styles.Products}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        </Switch>
        </SearchProvider>
    </Router>
  
  );
}

export default App;
