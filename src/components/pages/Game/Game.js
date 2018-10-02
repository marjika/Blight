import React, { Component } from 'react';
import Board from "../../Board";
import Modal from "../../Modal";
import './Game.css';

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

class Game extends Component {

  state = {
    immuneManCity: 16,
    scientistCity: 11,
    proteinCity: 6,
    sampleCity: 1,
    show: false,
    modalText: ""
  };

  //Assigns a random city for each item that needs to be found by staff
  componentDidMount = () => {
    const sampleCityId = randomIntFromInterval(3,5);
    const proteinCityId = randomIntFromInterval(7,10);
    const scientistCityId = randomIntFromInterval(12,15);
    const immuneManCityId= randomIntFromInterval(17,20);
    this.setState({ sampleCity: sampleCityId, proteinCity: proteinCityId, scientistCity: scientistCityId, immuneManCity: immuneManCityId })
  }

  showModal = () => {
    this.setState({show: !this.state.show}, () => {
      this.hideModal();
  });
  }

  hideModal = () => {
    setTimeout(()=>this.setState({show: !this.state.show}), 2000);
  }

  winGame = () => {
    this.setState({ modalText : "You win" }, () => {
      this.showModal();
    })
  };

  loseGame = () => {
    this.setState({ modalText : "You lose" }, () => {
      this.showModal();
  })
  };

  render() {
    return (
      <div className="App">

        <Board
          sampleCityId={this.state.sampleCity}
          proteinCityId={this.state.proteinCity}
          scientistCityId={this.state.scientistCity}
          immuneManCityId={this.state.immuneManCity}
          winGame={this.winGame}
          loseGame={this.loseGame}
        />
        <Modal show={this.state.show} modalText={this.state.modalText}></Modal>
      </div>
    );
  }
}

export default Game;