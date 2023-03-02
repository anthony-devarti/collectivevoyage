import axios from 'axios'

//this will have to be updated whenever gitpod rolls over
const BASE_URL= 'https://8000-anthonydevarti-cvdjango-l6pmgl4k7j9.ws-us89.gitpod.io/'

//401ing, maybe there is a permissions issue here?
export function getVehicleById(id){
    fetch(`${BASE_URL}vehicles/`)
}