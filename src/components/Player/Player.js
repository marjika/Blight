import React from "react";
import './Player.css';


class Player extends React.Component {


  render() {

      return (
  
  <div className="player">

      <h6>{this.props.name}, {this.props.occupation}, is in</h6>
     
  </div>

)}};

export default Player;
