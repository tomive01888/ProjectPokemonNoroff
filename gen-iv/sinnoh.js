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
        
        // console.log(pokeUrl);

       
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









const pokeballRow = document.getElementById("pokeball-row");
const idOfPokemon = document.getElementById("id-of-pokemon");

async function fetchPokemonData(pokemonId) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon data");
  }
  return await response.json();
}

async function fetchAndDisplayPokemon(pokemonId) {
  try {
    const pokemonData = await fetchPokemonData(pokemonId);
    console.log("Fetched Pokemon data:", pokemonData);
    const pokemonName = pokemonData.name;
    const pokemonImageUrl = pokemonData.sprites.other["official-artwork"].front_default;
    idOfPokemon.textContent = "#" + pokemonData.id + "-" + pokemonData.name;
    displayPokemon(pokemonName, pokemonImageUrl, pokemonData);
  
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
}

pokeballRow.addEventListener("click", function(event) {
  console.log("Pokeball clicked!");
  const clickedPokeball = event.target;
  if (clickedPokeball.tagName === "IMG") {
    const pokemonId = clickedPokeball.getAttribute("data-pokemon-id");
    fetchAndDisplayPokemon(pokemonId);
    pokeballRow.querySelectorAll("img").forEach(pokeball => pokeball.classList.remove("selected"));
    clickedPokeball.classList.add("selected");
  }
});

function displayPokemon(name, imageUrl, pokemonData) {
  const activePokemonImg = document.getElementById("active-pokemon");
  activePokemonImg.src = imageUrl;
  activePokemonImg.alt = name;
  idOfPokemon.textContent = "#" + pokemonData.id + "-" + pokemonData.name;
}
fetchAndDisplayPokemon(257);