import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
const SUSHINUM = 4

class App extends Component {

  state = {
    sushis: [],
    startIndex: 0,
    consumedSushi: false
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }//fetch


  handleSushiClick = () => {
    this.setState({
      startIndex: (this.state.sushis, this.state.startIndex + SUSHINUM)
    })
  }


  onSushiClick = (e) => {
    console.log("ate itt")
    this.setState({
      consumedSushi: this.state.consumedSushi = true
    })
  }



  render() {
    console.log(this.state.consumedSushi )
    const {startIndex, sushis} = this.state
    const sushistoDisplay = sushis.slice(startIndex, startIndex + SUSHINUM)
    return (

      <div className="app">
        <SushiContainer sushis={sushistoDisplay}
        handleSushiClick={this.handleSushiClick}
        onSushiClick={this.onSushiClick}
        />

        <Table onSushiClick={this.onSushiClick} />
      </div>
    );
  }
}

export default App;
