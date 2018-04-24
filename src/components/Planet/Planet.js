import React from 'react';

export default function Planet ({selectPlanet, planet}){
    
        return (
            <span onClick={() => selectPlanet(planet)}>{planet.name}</span>
        );
    
}