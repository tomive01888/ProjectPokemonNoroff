import { fetchPokemonApi, fetchMoreInfoPokemon } from "../javascript/export-fetch.js"


const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
const hoennLimiter = "?limit=135&offset=251"
const retrievedData = await fetchPokemonApi(BASE_URL + hoennLimiter)

console.log(retrievedData);
