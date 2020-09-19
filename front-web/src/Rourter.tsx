import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './componets/Header';
import Records from './pages/Records';


const Routes = () => (
  
  
  <BrowserRouter>
   <Header></Header>
    <Switch>
        <Route path='/' exact>
            <Home></Home>
        </Route>
        <Route path='/records'>
            <Records></Records>
        </Route>
    </Switch>

  </BrowserRouter>


)


export default Routes;