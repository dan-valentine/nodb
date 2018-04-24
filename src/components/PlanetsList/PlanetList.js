import React from 'react';
import Planet from '../Planet/Planet';
import './PlanetList.css';

export default function PlanetList({ planets, selectPlanet, prev, next }) {



    var planetList = planets.map(planet => {
        return (
            <Planet key={planet.name} planet={planet} selectPlanet={selectPlanet} />
        );
    });
    return (
        <div className="planets">
            <ul className="planet_list">
                {planetList}
            </ul>
            <div className="button_container">
                <button onClick={prev}>&lt;</button>
                <button onClick={next}>&gt;</button>
            </div>

        </div>
    );

}