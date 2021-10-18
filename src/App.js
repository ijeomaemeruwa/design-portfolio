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

import Relay from './projects/Relay'



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

   <Route exact path="/relay"><Relay /></Route>

  </Switch>  
<ScrollToTop /> 
</Router> 
</>
);
}

export default App;