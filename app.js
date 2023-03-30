"use strict";
window.addEventListener("load", initApp);

//initApp calls getPokemon() upon start
async function initApp() {
  console.log("JS is running!");
  const pokemons = await getPokemon();

  pokemons.forEach(showPokemon);
}

//getPokemon() is fetching data from a JSON file
async function getPokemon() {
  const response = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );
  const data = response.json();
  console.log(data);
  console.log("Data fetched");
  return data;
}

//showPokemon() creates a HTML for each data object in the JSON file
function showPokemon(pokemon) {
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article>
    
    <div id="picture_front">
    <image src="${pokemon.image}"></image>
    </div>
    <h1>${pokemon.name}</h1>
    <div id="pokedex_front">#0${pokemon.dexindex}</div>
    <div id="type_front">Type: ${pokemon.type}</div>

    <dialog id = "pokemon-stats">
    <h2 id = "dialog-title">${pokemon.name}</h2>
    <p>${pokemon.description}</p>
    <image id = "detail-image" src = "${pokemon.image}"></image>
    <div id="list">
        <li id = "ability">${pokemon.ability}</li>
        <!--<li><image id = "footprint" src = "${pokemon.footprint}"></image></li>-->
        <li id = "weaknesses">${pokemon.weaknesses}</li>
        <li id = "dexindex">${pokemon.dexindex}</li>
        <li id = "type">${pokemon.type}</li>
        <li id = "subtype">${pokemon.subtype}</li>
        <li id = "gender">${pokemon.gender}</li>
        <li id = "weight">${pokemon.weight}</li>
        <li id = "height">${pokemon.height}</li>
        <li id = "generation">${pokemon.generation}</li>
        <li id = "spilversion">${pokemon.spilversion}</li>
        <li id = "evolve">${pokemon.canEvolve}</li>
        <li id = "health">${pokemon.statsHP}</li>
        <li id = "attack">${pokemon.statsAttack}</li>
        <li id = "defence">${pokemon.statsDefence}</li>
        <li id = "specialAttack">${pokemon.statsSpecialAttack}</li>
        <li id = "specialDefence">${pokemon.statsSpecialDefence}</li>
        <li id = "speed">${pokemon.statsSpeed}</li>
    </div>
            <form id="close_button" method="dialog">
		     <button>Close</button>
            </form>
    </dialog>
    </article>
`
  );

  document
    .querySelector("#pokemons article:last-child")
    .addEventListener("click", pokemonClicked);
  //pokemoneClicked() shows a detailed view when clicked on a specific pokemon
  function pokemonClicked() {
    document.querySelector("#dialog-title").textContent = `${pokemon.name}`;
    document.querySelector("#detail-image").src = pokemon.image;
    document.querySelector(
      "#ability"
    ).textContent = `Ability: ${pokemon.ability}`;
    //document.querySelector("#footprint").src = pokemon.footprint;
    document.querySelector(
      "#dexindex"
    ).textContent = `DexIndex: #0${pokemon.dexindex}`;
    document.querySelector("#type").textContent = `Type: ${pokemon.type}`;
    document.querySelector(
      "#subtype"
    ).textContent = `Subtype: ${pokemon.subtype}`;
    document.querySelector(
      "#weaknesses"
    ).textContent = `Weakness: ${pokemon.weaknesses}`;
    document.querySelector("#gender").textContent = `Gender: ${pokemon.gender}`;
    document.querySelector(
      "#weight"
    ).textContent = `Weight: ${pokemon.weight} gram`;
    document.querySelector(
      "#height"
    ).textContent = `Height: ${pokemon.height} meter`;
    document.querySelector(
      "#generation"
    ).textContent = `Generation ${pokemon.generation}`;
    document.querySelector(
      "#spilversion"
    ).textContent = `Spil: ${pokemon.spilversion}`;
    document.querySelector(
      "#evolve"
    ).textContent = `Evolve: ${pokemon.canEvolve}`;
    document.querySelector(
      "#health"
    ).textContent = `Health: ${pokemon.statsHP}`;
    document.querySelector(
      "#attack"
    ).textContent = `Attack: ${pokemon.statsAttack}`;
    document.querySelector(
      "#defence"
    ).textContent = `Defense: ${pokemon.statsDefence}`;
    document.querySelector(
      "#specialAttack"
    ).textContent = `Special Attack: ${pokemon.statsSpecialAttack}`;
    document.querySelector(
      "#specialDefence"
    ).textContent = `Special Defense: ${pokemon.statsSpecialDefence}`;
    document.querySelector(
      "#speed"
    ).textContent = `Speed: ${pokemon.statsSpeed}`;
    document.querySelector("#pokemon-stats").showModal();
  }
}
