import React from 'react';

import Home from './pages/Home';
import Gifts from './pages/Gifts';
import {Route ,Switch} from "react-router-dom";
 import Navbar from './components/Navbar';



//import './App.css';

function App() {
  return (
  <>
     <Navbar/>
      <Switch>
      <Route exact path="/gift" component={Gifts}></Route>
      <Route  path="/home" component={Home}></Route>
    </Switch> 
  </>
    
  );
}

export default App;
