import React from 'react';
import Button from "../Button";
import usmap from '../USMap/images/USA.jpg';
import staff from "../../players.json";
import "./USMap.css";

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

class USMap extends React.Component {

    constructor(props){
        super(props)
          this.state = {
            staff
          }
      }
    
    componentDidMount() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      const img = this.refs.image
      img.onload = () => {
        ctx.drawImage(img, 0, 0)
        rect({ctx, x: staff[0].x, y: staff[0].y, width: 10, height: 10});
        rect({ctx, x: 35, y: 110, width: 25, height: 25});
        <Button />
        // ctx.font = "40px Courier"
        // ctx.fillText(this.props.text, 210, 75)
      }
    }

    // componentDidUpdate() {
    //     this.updateCanvas();
    // }
    // updateCanvas() {
    //     //const ctx = this.refs.canvas.getContext('2d');
    //     //ctx.clearRect(0,0, 300, 300);
    //     // draw children “components”
    //     rect({ctx, x: 10, y: 10, width: 10, height: 10});
    //     rect({ctx, x: 35, y: 110, width: 25, height: 25});
    // }
    
    render() {
      return(
        <div>
          <canvas ref="canvas" width={1200} height={841} />
          <img ref="image" src={usmap} className="hidden" />
        </div>
      )
    }
  }
  export default USMap