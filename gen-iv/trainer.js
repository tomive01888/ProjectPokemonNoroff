///////////////////////////// Trainer Tom
//
const pokeballRow = document.getElementById("pokeball-row");
const idOfPokemon = document.getElementById("id-of-pokemon");
const moveset1 = document.querySelector('.moveset-1');
const moveset2 = document.querySelector('.moveset-2');
const moveset3 = document.querySelector('.moveset-3');
const moveset4 = document.querySelector('.moveset-4');

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
    const pokemonImageUrl = pokemonData.sprites.other.home.front_default;
    idOfPokemon.textContent = "#" + pokemonData.id + "-" + pokemonData.name;
    displayPokemon(pokemonName, pokemonImageUrl, pokemonData);
    updateMoveset(pokemonId);
  
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
}

pokeballRow.addEventListener("click", function(event) {
  // console.log("Pokeball clicked!");
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

function updateMoveset(pokemonId) {
  const movesets = {
    134: ["Hydro Pump", "Ice Power", "Aqua Ring", "Acid Armor"],
    470: ["Leaf Blade", "X-scissor", "Headbutt", "Knock Off"],
    197: ["Dig", "Payback", "Quick Attack", "Wish"],
    196: ["Shadowball", "Psychic", "Calm Mind", "Wish"],
    405: ["Ice Fang", "Spark", "Fire Fang", "Strength"],
    359: ["Psycho Cut", "Night Slash", "Shadow Claw", "Aerial Ace"], 
  };

  const moveset = movesets[pokemonId];
  if (moveset) {
    moveset1.textContent = moveset[0];
    moveset2.textContent = moveset[1];
    moveset3.textContent = moveset[2];
    moveset4.textContent = moveset[3];
  }
}

fetchAndDisplayPokemon(134);

