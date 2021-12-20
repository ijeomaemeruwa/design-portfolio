import React from 'react';
import './App.css';
import './font.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { 
  About,   
  Projects
} from './pages'

import Home from './pages/Home'
import Nav from './components/NavBar/Nav';
import ScrollToTop from './components/ScrollToTop';
import TopScroll from './components/TopScroll'

import Bridgecard from './projects/Bridgecard'
import Marble from './projects/Marble'



const App = () => { 
return (
<>
<Router>
  <TopScroll />
  <Nav />

  <Switch>
   <Route exact path="/"><Home /></Route>  
   <Route exact path="/about-me"><About /></Route> 
   <Route exact path="/projects"><Projects /></Route> 

   <Route exact path="/bridgecard"><Bridgecard /></Route>
   <Route exact path="/marble-wallet"><Marble /></Route>
  </Switch>  
<ScrollToTop /> 
</Router> 
</>
);
}

export default App;