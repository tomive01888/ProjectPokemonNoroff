import { fetchPokemonApi } from "../javascript/export-fetch.js"


const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
const hoennLimiter = "?limit=135&offset=251"
const retrievedData = await fetchPokemonApi(BASE_URL + hoennLimiter)

const errorContainer = document.querySelector(".error-container")

if(retrievedData.error === false){

    const allHoennPokemon = retrievedData.data.results
    console.log("All Hoenn Pokemon", allHoennPokemon);


}else{

    errorContainer.innerHTML = `
                                    <h1>Error:${retrievedData.status}</h1>
                                    <p>${retrievedData.msg}</p>
    `;
}
