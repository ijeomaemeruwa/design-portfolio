import React, { Suspense } from 'react';
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

import Loader from './components/Loader'

const Bridgecard = React.lazy(() => import('./projects/Bridgecard'));
const Kiwi = React.lazy(() => import('./projects/Kiwi'));
const Marble = React.lazy(() => import('./projects/Marble'));
const Staple = React.lazy(() => import('./projects/Staple'));



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


   <Route exact path="/bridgecard">
    <Suspense fallback={<Loader />}>
     <Bridgecard />
    </Suspense >
   </Route>

   <Route exact path="/kiwi">
    <Suspense fallback={<Loader />}>
     <Kiwi />
    </Suspense >
   </Route>



   <Route exact path="/marble-wallet">
    <Suspense fallback={<Loader />}>
     <Marble />
    </Suspense >
   </Route>

   <Route exact path="/staple">
    <Suspense fallback={<Loader />}>
      <Staple />
    </Suspense >
   </Route>

  </Switch>  
<ScrollToTop /> 
</Router> 
</>
);
}



export default App;