import React from 'react';

import Home from './pages/Home';
import Gifts from './pages/Gifts';
import Error from './pages/Error';
import {Route ,Switch} from "react-router-dom";
 import Navbar from './components/Navbar';



//import './App.css';

function App() {
  return (
  <>
     <Navbar/>
      <Switch>
      <Route exact path="/gift" component={Gifts}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/error" component={Error}></Route>
    </Switch> 
  </>
    
  );
}

export default App;
