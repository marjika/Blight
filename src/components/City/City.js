import React from "react";

function randomInfection() {
    return Math.floor(Math.random() * 3) + 1;
}

let infectionLevel = randomInfection();

class City extends React.Component {
    constructor(props){
        super(props)
        
    this.state = {
        infectionRate: 0
    }
}

    componentDidMount() {
        this.increaseInfectionLevel(this.props.cityId);
    }

    //boolean to signal that there may be an increase in infection level
    componentWillReceiveProps(props) {
        const refresh = this.props.refresh;
        if (props.refresh !== refresh) {
            this.increaseInfectionLevel(this.props.cityId);
        }
    }

    //chooses random cities and infection rate and creates and outbreak if infection level > 3
    increaseInfectionLevel = (idarr) => {
        for(let i=0; i<idarr.length;i++) {
            if (idarr[i] === this.props.id) {
                const infectionRate = this.state.infectionRate+infectionLevel;
                if (infectionRate > 3) {
                    this.props.outbreak();
                    this.setState({ infectionRate: 3 });
                } else {
                this.setState({ infectionRate: infectionRate })}
            }
        }
        infectionLevel = randomInfection();
    }

    //decreases level of infection on button click
    heal = (id) => {
        if (id===this.props.id) {
        const infectionRate = this.state.infectionRate-1;
        this.setState({ infectionRate: infectionRate })
    }}

    //the general has ability to double heal cities
    doubleHeal = (id) => {
        if (id===this.props.id && this.state.infectionRate>=2) {
        const infectionRate = this.state.infectionRate-2;
        this.setState({ infectionRate: infectionRate })}
        if (id===this.props.id && this.state.infectionRate<2) {
            this.setState({ infectionRate: 0 })
    }}

    render() {
        return (
    
    <div className="city">

        <h6>{this.props.name}</h6>
        <h6>{this.state.infectionRate}</h6>
        {this.state.infectionRate > 0 && (this.props.id===this.props.person1LocationId) &&
        <button onClick={(event) => { this.heal(this.props.id); this.props.increaseCount();}}>
          Cure Zombies
        </button>}
        {this.state.infectionRate > 0 && (this.props.id===this.props.person2LocationId) &&
        <button onClick={(event) => { this.heal(this.props.id); this.props.increaseCount();}}>
            Cure Zombies
        </button>
        }
        {this.state.infectionRate > 0 && (this.props.id===this.props.person3LocationId) &&
        <button onClick={(event) => { this.heal(this.props.id); this.props.increaseCount();}}>
            Cure Zombies
        </button>
        }
        {this.state.infectionRate > 0 && (this.props.id===this.props.person4LocationId) &&
        <button onClick={(event) => { this.heal(this.props.id); this.props.increaseCount();}}>
            Cure Zombies
        </button>
        }
        {this.state.infectionRate > 0 && (this.props.id===this.props.person5LocationId) &&
        <button onClick={(event) => { this.doubleHeal(this.props.id); this.props.increaseCount();}}>
            Cure Zombies (X2)
        </button>
        }
        {(this.props.id===this.props.person1LocationId) &&
        <div><h5>Where do you want to go next?</h5>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} onClick={() => this.props.moveLocation1(place)}> {place} </button>
        ))}</div></div>
      }
        {(this.props.id===this.props.person2LocationId) &&
        <div><h5>Where do you want to go next?</h5>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} onClick={() => this.props.moveLocation2(place)}> {place} </button>
        ))}</div></div>
      }
        {(this.props.id===this.props.person3LocationId) &&
        <div><h5>Where do you want to go next?</h5>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} onClick={() => this.props.moveLocation3(place)}> {place} </button>
        ))}</div></div>
      }
        {(this.props.id===this.props.person4LocationId) &&
        <div><h5>Where do you want to go next?</h5>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} onClick={() => this.props.moveLocation4(place)}> {place} </button>
        ))}</div></div>
      }
        {(this.props.id===this.props.person5LocationId) &&
        <div><h5>Where do you want to go next?</h5>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} onClick={() => this.props.moveLocation5(place)}> {place} </button>
        ))}</div></div>
      }
   
    </div>

)}};

export default City;
