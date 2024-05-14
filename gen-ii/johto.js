import { fetchPokemonApi } from "../javascript/export-fetch.js"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
const johtoLimiter = "?limit=100&offset=151"
const retrievedData = await fetchPokemonApi(BASE_URL + johtoLimiter)

console.log(retrievedData);
