import axios from 'axios';
const apiURL = 'https://swapi.co/api/planets/?page=';
const saveStateURL = "/api/planets/"

export function getPlanetList(page) {
   return axios.get( apiURL+ page ).then( response =>  response.data.results );
}

export function getTravelList(){
    return axios.get(saveStateURL).then(response => response.data);
}

export function saveTravelList(planet){
    return axios.post(saveStateURL, planet).then(response => response.data);
}

export function deletePlanet(planet){
    return axios.delete(saveStateURL+planet.name, planet).then(response => response.data);
}
