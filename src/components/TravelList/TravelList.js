import React, { Component } from 'react';
import Planet from '../Planet/Planet';
import './TravelList.css';

export default class TravelList extends Component {
    render () {
        var planetList = this.props.planets.map(planet=> {
            return (
                <div key={planet.name} className="travel_list_item">
                    <Planet  planet={planet} selectPlanet={this.props.selectPlanet} />
                    <button onClick={() => this.props.remove(planet)}>Remove</button>
                </div>
            );
        });
        return (
            <div className="travel_list">
                {planetList}
            </div>
        );
    }
}