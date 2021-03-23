import React, { useState } from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faClock, faPlusCircle, faCheckCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import {Nav} from './components/Nav.js'
import {Home} from './components/Home'
import CardApp from './components/Stylized Cards/CardApp'
import {Loader} from './components/Loaders/Loader'
library.add( faSpinner, faClock, faPlusCircle, faCheckCircle, faMinusCircle)

const links = [
  {
    id:1,
    comp: CardApp,
    name: 'Product Card',
    link: '/cardcomp',
    icon: 'clock'
  },
  {
    id:2,
    comp: Loader,
    name: 'Loader',
    link: '/loader',
    icon: 'spinner'
  }

]

function App() {
  const [linksState, setLinks] = useState(links)
  return (
    <HashRouter basename='/'>
    <div className="App">
      <Nav links={linksState}/>
      <header className="App-header">
        
      <Switch>
      <Route path="/" exact component={Home}/>
      {linksState.map(link =>
        <Route key={link.id} path={link.link} component={link.comp}/>
        )}
      
      </Switch>
      
      </header>
    </div>
    </HashRouter>
  );
}

export default App;
