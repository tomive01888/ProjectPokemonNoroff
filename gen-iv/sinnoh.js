import { fetchPokemonApi, fetchMoreInfoPokemon } from "../javascript/export-fetch.js"


const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
const sinnohLimiter = "?limit=107&offset=386"
const retrievedData = await fetchPokemonApi(BASE_URL + sinnohLimiter)

const errorContainer = document.querySelector(".error-container")

if(retrievedData.error === false){

    const allSinnohPokemon = retrievedData.data.results
    console.log("All Hoenn Pokemon", allSinnohPokemon);

    for(let i = 0; i < allSinnohPokemon.length; i++){

        const pokeUrl = await fetchMoreInfoPokemon(allSinnohPokemon[i].url)
        
        console.log(pokeUrl); 

       
            const containerFolder = document.querySelector(".image-wrapper")

            containerFolder.innerHTML += `
            <div class="pokecard"> 
                <span>${pokeUrl.id}</span>
                <img src="${pokeUrl.sprite.versions["generation-iv"]["heartgold-soulsilver"].front_default}" alt="${pokeUrl.name}"/>            
            </div>  
            `;
        

    }

   


}else{

    errorContainer.innerHTML = `
                                    <h1>Error:${retrievedData.status}</h1>
                                    <p>${retrievedData.msg}</p>
    `;
}