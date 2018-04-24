import React, { Component } from 'react';
import {getPlanetList, getTravelList, saveTravelList, deletePlanet} from '../../planet'
import PlanetList from "../PlanetsList/PlanetList";
import PlanetDisplay from "../PlanetDisplay/PlanetDisplay";
import TravelList from "../TravelList/TravelList";
import './TravelPlanner.css'

export default class TravelPlanner extends Component {

    constructor(){
        super();
        this.state={
          planets: [],
          planetsToTravel:[],
          page: 1,
          selectedPlanet: null
        }
    
        this.selectPlanet = this.selectPlanet.bind(this);
        this.addTravel = this.addTravel.bind(this);
        this.remove = this.remove.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
      }
      componentDidMount(){
        getPlanetList(this.state.page).then(list =>{this.setState({ planets: list})});
        getTravelList().then(list => this.setState({planetsToTravel: list}));

      }
    
      selectPlanet(planet){
        this.setState({
          selectedPlanet: planet
        });
      }
    
      addTravel(planet){
        var index = -1
        this.state.planetsToTravel.forEach((planetElement, i) => {
          if(planet.name === planetElement.name){
            index = i;
            return;
          }
        })
        
        if(index === -1){
          saveTravelList(planet).then(list => this.setState({planetsToTravel: list}));
        }
      }
    
      remove(planet){
        deletePlanet(planet).then(list =>  this.setState(
          {
            selectedPlanet: this.state.selectedPlanet,
            planetsToTravel: list
          }));
      }
    
      next(){
        let temp = this.state.page + 1;
        getPlanetList(temp).then(list =>{
          this.setState({ planets: list, page: temp})
       });    
      }

      prev(){
        let temp = this.state.page - 1;
        getPlanetList(temp).then(list =>{
          this.setState({ planets: list, page: temp})
       });
      }

    render () {
        return (
            <div className="travelPlanner">
             <PlanetList next={this.next} prev={this.prev} planets={this.state.planets} selectPlanet={this.selectPlanet}/>
              <div className="info_container">
                <PlanetDisplay selectedPlanet={this.state.selectedPlanet} addTravel={this.addTravel} remove={this.remove} planets={this.state.planetsToTravel}/>
                <TravelList getTravel={this.getTravel} selectPlanet={this.selectPlanet} remove={this.remove} planets={this.state.planetsToTravel} />
              </div>
            </div>
        );
    }
}