
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {HomePage} from './HomePage/HomePage';
import Detail from './Detail/Detail'

import React from 'react'

const App = (props) => {

    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/Detail/:id' component={Detail} exact />
        </Switch>
      </BrowserRouter>
    );
  
}

export default App;

