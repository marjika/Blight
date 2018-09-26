import React from "react";
import CityList from "../CityList";
import Player from "../Player";
import Modal from "../Modal";
import USMap from "../USMap";
import cities from "../../cities.json";
import staff from "../../players.json";

class Board extends React.Component {
       
    constructor(props){
        super(props)

        this.state = {
            staff,
            cities,
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

    // outbreak = () => {
    //     outbreakCount++;
    //     console.log(outbreakCount);
    //     this.setState({ modalText: "You've had an outbreak " + outbreakCount + " times." }, () => {
    //         this.showModal();
    //     })   
    //     if (outbreakCount > 7) {
    //       this.props.loseGame();
    //     }
    // }

    render() {
        return (
         <div className="Board">
            <USMap text="Sophie rules"/>
            {this.state.staff.map(person => (
                <Player
                    name={person.name}
                    occupation={person.occupation}
                    id={person.id}
                    key={person.id}
                    currentLocation={this.state.currentLocation}
                />
            ))}
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
                //outbreak={this.outbreak}
                />
                <Modal show={this.state.show} modalText={this.state.modalText}></Modal>
            </div>
            );
          }
        }
           

export default Board;