import React from 'react'
import Header from './Header'
import TopMessage from './TopMessage'
import MapContent from './MapContent'
import Footer from './Footer'

import "../../../scripts/libs/jquery-1.11.3.min.js"
import "../../../scripts/libs/jquery.vmap.min.js"
import "../../../scripts/libs/jquery.vmap.usa.js"

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <TopMessage/>
        <MapContent/>
        <Footer/>
      </div>
    );

  }

}

export default Map