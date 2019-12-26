import React from 'react';
import {Switch, Route} from 'react-router-dom';

import MainPage from './mainpage';
import Docs from './docs';
import Others from './others';
import About from './about';

const Main = () => (
  <Switch>
    <Route exact path ="/" component={MainPage}/>
    <Route path ="/about" component={About}/>
    <Route path ="/docs" component={Docs}/>
    <Route path ="/others" component={Others}/>
  </Switch>
)

export default Main;