import React, { useState } from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThList, faClock, faPlusCircle, faCheckCircle, faMinusCircle, faGlobeAfrica, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import {Nav} from './components/Nav.js'
import {Home} from './components/Home'
import CardApp from './components/Stylized Cards/CardApp'
library.add( faThList, faClock, faPlusCircle, faCheckCircle, faMinusCircle, faGlobeAfrica, faCalendarDay)

const links = [
  {
    id:1,
    comp: CardApp,
    name: 'cardcomp',
    link: '/cardcomp',
    icon: 'clock'
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
