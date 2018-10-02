import React from "react";
import ReactDOM from 'react-dom';

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

class Button extends React.Component {
    constructor(props){
        super(props)
          this.state = {
            xCoordinate: 10,
            yCoordinate: 10
          }
      }
      componentDidMount() {
        let canvas = ReactDOM.findDOMNode(this.refs.canvas);
        let ctx = canvas.getContext('2d');
        rect({ctx, x: this.state.xCoordinate, y: this.state.yCoordinate, width: 100, height: 100})

    }
    
    render() {
        return (
        <div>
            <canvas ref="canvas" />
        </div>
        );
    }
}

export default Button;