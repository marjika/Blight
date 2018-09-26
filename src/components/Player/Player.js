import React from "react";

class Player extends React.Component {


  render() {

      return (
  
  <div className="player">

      <h6>{this.props.name}</h6>
      <h6><strong>Occupation:</strong> {this.props.occupation}</h6>
 
  </div>

)}};

export default Player;
