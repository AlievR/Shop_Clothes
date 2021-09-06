import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Page/Main/Main';
import ProductDetail from './Page/ProductDetail/ProductDetail';

const App: React.FC = () => {
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/product-detail/:id" component={ProductDetail} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
