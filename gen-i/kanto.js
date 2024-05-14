import { fetchPokemonApi } from "../javascript/export-fetch.js"


const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
const kantoLimiter = "?limit=151"
const retrievedData = await fetchPokemonApi(BASE_URL + kantoLimiter)

console.log(retrievedData);