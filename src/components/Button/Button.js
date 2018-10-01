import React from "react";
import {Layer, Rect, Circle, Stage, Group} from "react-konva";
import Konva from 'konva';
import cities from "../../cities.json";

// function rect(props) {
//     const {ctx, x, y, width, height} = props;
//     ctx.fillRect(x, y, width, height);
// }

class Button extends React.Component {

        // constructor(...args) {
        //   super(...args);
        //   this.state = {
        //     color: 'green'
        //   };
        //   this.handleClick = this.handleClick.bind(this);
        // }
        // handleClick() {
        //   this.setState({
        //     color: Konva.Util.getRandomColor()
        //   });
        // }
        render() {
            return (
                cities.map(item => (
                    
                <Rect
                    x={item.x} y={item.y} width={25} height={15}
                    fill={'blue'}
                    // shadowBlur={10}
                    // onClick={this.handleClick}
                />
                )
            ))
        }
      



    
    // render() {
    //     return (
    //         rect({ x: 200, y: 300, width: 100, height: 100})

    //     );
    // }
}

export default Button;