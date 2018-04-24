import React from 'react';
import "./PlanetDisplay.css";

export default function PlanetDisplay({ selectedPlanet, addTravel, remove, planets }) {

    return (
        <div className="display">
            {
                selectedPlanet ?
                    <div>
                        <div ><b>Name:</b> {selectedPlanet.name}</div>
                        <div>Climate: {selectedPlanet.climate}</div>
                        <div>Gravitational Force: {selectedPlanet.gravity}</div>
                        <div>Terrain: {selectedPlanet.terrain}</div>
                        <div>Population: {selectedPlanet.population}</div>
                        {
                            planets.filter(planet => planet.name === selectedPlanet.name).length
                                ?
                                <button onClick={() => remove(selectedPlanet)}>I Changed my mind this planet Sucks</button>
                                :
                                <button onClick={() => addTravel(selectedPlanet)}>I Wanna go here</button>

                        }

                    </div>
                    :
                    <div>
                        <span>Please Select a planet</span>
                    </div>
            }
        </div>
    );
}
