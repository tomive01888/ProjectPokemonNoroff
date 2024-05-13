import { fetchPokemonApi, fetchMoreInfoPokemon } from "../javascript/export-fetch.js"


const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
const hoennLimiter = "?limit=135&offset=251"
const retrievedData = await fetchPokemonApi(BASE_URL + hoennLimiter)

const errorContainer = document.querySelector(".error-container")

if(retrievedData.error === false){

    const allHoennPokemon = retrievedData.data.results
    console.log("All Hoenn Pokemon", allHoennPokemon);

    for(let i = 0; i < allHoennPokemon.length; i++){

        const pokeUrl = await fetchMoreInfoPokemon(allHoennPokemon[i].url)
        
        console.log(pokeUrl); 

        const containerFolder = document.querySelector(".image-carousel")
        for(let i = 0; i < pokeUrl.length; i++){
    
            containerFolder.innerHTML += `
            <div class="pokecard"> 
                <span>${pokeUrl.id}</span>
                <img src="${pokeUrl.sprite.versions["generation-iii"]["ruby-sapphire"].front_default}" alt="${pokeUrl.name}"/>            
            </div>  
            `;
        }

    }

   


}else{

    errorContainer.innerHTML = `
                                    <h1>Error:${retrievedData.status}</h1>
                                    <p>${retrievedData.msg}</p>
    `;
}