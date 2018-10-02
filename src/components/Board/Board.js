import React from "react";
import CityList from "../CityList";
import Player from "../Player";
import USMap from "../USMap";
import Modal from "../Modal";
import { Col, Row, Container } from "../Grid";
import cities from "../../cities.json";
import staff from "../../players.json";
import usmap from '../images/USA.jpg';

function circle(ctx, x, y, value) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    if (value === 3 ) {
        ctx.fillStyle = "red"
    }
    else if (value === 2) {
        ctx.fillStyle = "orange"
    }
    else if (value === 1) {
        ctx.fillStyle = "yellow"
    }
    else if (value === 0) {
        ctx.fillStyle = "green"
    }
    ctx.fill();
}


class Board extends React.Component {
       
    constructor(props){
        super(props)

        this.state = {
            staff,
            cities,
            infections: [],
            sampleFound: false,
            proteinFound: false,
            scientistFound: false,
            immuneManFound: false,
            missionOne: false,
            missionTwo: false,
            missionThree: false,
            missionFour: false,
            show: false,
            modalText: ""
          }; 
    }

    componentDidMount() {
        this.updateCanvas()
    }


    componentDidUpdate() {
        this.updateCanvas();
    }

    clearCanvas() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    updateCanvas() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
      
          ctx.drawImage(img, 0, 0, img.width, img.height,    
                            0, 0, canvas.width, canvas.height);
          //ctx.font = "30px Comic Sans MS";
        //   ctx.fillStyle = "red";
          this.state.infections.map((item, index) => {
              //rect({ctx, x: cities[index].x, y: cities[index].y, width: 10, height: 10})
            //   ctx.fillText(item, cities[index].x, cities[index].y)
              circle(ctx, cities[index].x, cities[index].y, item)
          });
        
      }
      

    //modal functionality
    showModal = () => {
        this.setState({show: !this.state.show}, () => {
          this.hideModal();
      });
      }
    
    hideModal = () => {
        setTimeout(()=>this.setState({show: !this.state.show}), 2000);
    }

    //modals for finding players needed items and bringing them to CDC in Atlanta
    foundSample = () => {
        if (!this.state.sampleFound) {            
        this.setState({ sampleFound: true });
        this.setState({ modalText : "You found a DNA sample of the virus"}, () => {
            this.showModal();
          })
        }
    }    

    foundProtein = () => {
        if (!this.state.proteinFound) {
            this.setState({ proteinFound: true });
            this.setState({ modalText : "You found a plant with the anti-Zombie protein"}, () => {
                this.showModal();
            })
        }
    }

    foundScientist = () => {
        if (!this.state.scientistFound) {
            this.setState({ scientistFound: true });
            this.setState({ modalText: "You found the missing scientist, Dr. Jasper" }, () => {
                this.showModal();
            })
        }
    }

    foundImmuneMan = () => {
        if (!this.state.immuneManFound) {
            this.setState({ immuneManFound: true });
            this.setState({ modalText: "You found an immune patient" }, () => {
                this.showModal();
            })
        }
    }

    mission1 = () => {
        if (!this.state.missionOne) {
            this.setState({ missionOne: true });
            this.setState({ modalText: "Mission complete. Help the others" }, () => {
                this.showModal();
              })
            if (this.state.missionTwo && this.state.missionThree && this.state.missionFour) {
                this.props.winGame();
            }
        }
    }

    mission2 = () => {
        if (!this.state.missionTwo) {
            this.setState({ missionTwo: true });
            this.setState({ modalText: "Mission complete. Help the others" }, () => {
                this.showModal();
              })
            if (this.state.missionOne && this.state.missionThree && this.state.missionFour) {
                this.props.winGame();
            }
        }
    }

    mission3 = () => {
        if (!this.state.missionThree) {
            this.setState({ missionThree: true });
            this.setState({ modalText: "Mission complete. Help the others" }, () => {
                this.showModal();
              })
            if (this.state.missionOne && this.state.missionTwo && this.state.missionFour) {
                this.props.winGame();
            }
        }
    }

    mission4 = () => {
        if (!this.state.missionFour) {
            this.setState({ missionFour: true });
            this.setState({ modalText: "Mission complete. Help the others" }, () => {
                this.showModal();
              })
            if (this.state.missionOne && this.state.missionTwo && this.state.missionThree) {
                this.props.winGame();
            }
        }
    }

    cityInfectionArrayChange = (array) => {
        const infections = array;
        this.setState({ infections: infections }, () => {
            this.clearCanvas();
            this.updateCanvas();
            // console.log(this.refs.canvas.getContext("2d"))
        })
    }


    render() {
        return (
        <Container fluid>
         <div className="Board">
         <Row>
         <Col size="md-9">
            <canvas ref="canvas" width={1000} height={563}/>
            <img ref="image" src={usmap} className="hidden" />
        </Col>
            {/* {this.state.staff.map(person => (
                <Player
                    name={person.name}
                    occupation={person.occupation}
                    id={person.id}
                    key={person.id}
                    currentLocation={this.state.currentLocation}
                />
            ))} */}
            <Col size="md-3">
            <CityList
                cities={cities}
                sampleCityId={this.props.sampleCityId}
                proteinCityId={this.props.proteinCityId}
                scientistCityId={this.props.scientistCityId}
                immuneManCityId={this.props.immuneManCityId}
                foundSample={this.foundSample}
                sample={this.state.sampleFound}
                mission1={this.mission1}
                foundProtein={this.foundProtein}
                protein={this.state.proteinFound}
                mission2={this.mission2}
                foundScientist={this.foundScientist}
                scientist={this.state.scientistFound}
                mission3={this.mission3}
                foundImmuneMan={this.foundImmuneMan}
                immuneMan={this.state.immuneManFound}
                mission4={this.mission4}
                loseGame={this.props.loseGame}
                cityInfectionArrayChange={this.cityInfectionArrayChange}
                />
                </Col>
                </Row>
                <Row>
                <Modal show={this.state.show} modalText={this.state.modalText}></Modal>
                </Row>
            </div>
            </Container>
            );
          }
        }
           

export default Board;