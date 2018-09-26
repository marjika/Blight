import React from "react";

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

class Button extends React.Component {



    
    render() {
        return (
            rect({ x: 200, y: 300, width: 100, height: 100})

        );
    }
}

export default Button;