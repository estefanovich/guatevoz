import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home'
import Map from './Map'

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/map' component={Map}/>
      </Switch>
    )
  }
}

export default Main
