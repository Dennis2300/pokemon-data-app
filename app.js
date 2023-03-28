"use strict";
window.addEventListener("load", initApp);

async function initApp() {
    console.log("JS is running!");
const pokemons = await getPokemon();

    //pokemons.forEach(showPokemon)
    showPokemon(pokemons)
}


async function getPokemon() {
    const response = await fetch("https://raw.githubusercontent.com/Dennis2300/Zacian-pokemon-data/main/zacian.json");
    const data = response.json();
    console.log(data);
    console.log("Data fetched");
    return data;
}

function showPokemon(pokemon) {
    document.querySelector("#pokemons").insertAdjacentHTML(
        "beforeend",
    /*html*/ `
    <article>
    
    <div id="picture2">
    <image src="${pokemon.image}"></image>
    </div>
    <h1>${pokemon.name}</h1>
    <div id="pokedex2">#0${pokemon.dexindex}</div>
    <div id="type2">Type: ${pokemon.type}</div>
    <dialog id = "pokemon-stats">
    <h2 id = "dialog-title">${pokemon.name}</h2>
    <p>${pokemon.description}</p>
        <div id="picture">
            <image src="${pokemon.image}"></image>
        </div>
    <div id="list">
        <li id = "ability">${pokemon.ability}</li>
        <li id = "footprint">${pokemon.footprint}</li>
        <li id = "dexindex">${pokemon.dexindex}</li>
        <li id = "type">${pokemon.type}</li>
        <li id = "subtype">${pokemon.subtype}</li>
        <li id = "weaknesses">${pokemon.weaknesses}</li>
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
`);

document.querySelector("#pokemons article:last-child").addEventListener("click", pokemonClicked)
        function pokemonClicked() {
            console.log(pokemon);
            document.querySelector("#dialog-title").textContent = `${pokemon.name}`
            document.querySelector("#ability").textContent = `Ability: ${pokemon.ability}`
            document.querySelector("#footprint").textContent = `Footprint: ${pokemon.footprint}`
            document.querySelector("#dexindex").textContent = `DexIndex: #0${pokemon.dexindex}`
            document.querySelector("#type").textContent = `Type: ${pokemon.type}`
            document.querySelector("#subtype").textContent = `Subtype: ${pokemon.subtype}`
            document.querySelector("#weaknesses").textContent = `Weakness: ${pokemon.weaknesses}`
            document.querySelector("#gender").textContent = `Gender: ${pokemon.gender}`
            document.querySelector("#weight").textContent = `Weight: ${pokemon.weight} gram`
            document.querySelector("#height").textContent = `Height: ${pokemon.height} meter`
            document.querySelector("#generation").textContent = `Generation ${pokemon.generation}`
            document.querySelector("#spilversion").textContent = `Spil: ${pokemon.spilversion}`
            document.querySelector("#evolve").textContent = `Evolve: ${pokemon.canEvolve}`
            document.querySelector("#health").textContent = `Health: ${pokemon.statsHP}`
            document.querySelector("#attack").textContent = `Attack: ${pokemon.statsAttack}`
            document.querySelector("#defence").textContent = `Defense: ${pokemon.statsDefence}`
            document.querySelector("#specialAttack").textContent = `Special Attack: ${pokemon.statsSpecialAttack}`
            document.querySelector("#specialDefence").textContent = `Special Defense: ${pokemon.statsSpecialDefence}`
            document.querySelector("#speed").textContent = `Speed: ${pokemon.statsSpeed}`
            document.querySelector("#pokemon-stats").showModal()
        }
}
