import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Page/Main/Main';
import ProductDetail from './Page/ProductDetail/ProductDetail';
import Basket from './Page/Basket/Basket';

const App: React.FC = () => {


  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/woman" component={Main} exact/>
        <Route path="/product-detail/:id" component={ProductDetail} />
        <Route path="/basket" component={Basket} exact/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
