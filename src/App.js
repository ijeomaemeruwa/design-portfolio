import React from 'react';
import './App.css';
import './font.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  // Home, 
  About,   
  Projects
} from './pages'

//import { PROJECTS } from './data/portfolio';

import Home from './pages/Home'
import Nav from './components/NavBar/Nav';
import ScrollToTop from './components/ScrollToTop';
import SteadAfrica from './projects/SteadAfrica';


const App = () => {
  
return (
<>
<Router>
  <Nav />

  <Switch>
   <Route exact path="/"><Home /></Route>  
   <Route exact path="/about-me"><About /></Route> 
   <Route exact path="/projects"><Projects /></Route> 

   <Route exact path="/steadafrica">
     <SteadAfrica />
   </Route>


  </Switch>  

<ScrollToTop />  
</Router> 
</>
);
}

export default App;