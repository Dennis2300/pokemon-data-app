"use strict";
window.addEventListener("load", initApp);

async function initApp() {
    console.log("JS is running!");
    const zacian = await getPokemon(
        "https://raw.githubusercontent.com/Dennis2300/Zacian-pokemon-data/main/zacian.json"
    );

        showPokemon(zacian);
}


async function getPokemon(url) {
    const response = await fetch(url);
    const data = response.json();
    return data;
}

function showPokemon(pokemon) {
    document.querySelector("#pokemons").insertAdjacentHTML(
        "beforeend",
    /*html*/ `
    <article>
    <h1>${pokemon.name}</h1>

        <div id="picture">
            <image src="${pokemon.image}"></image>
        </div>

    <p>${pokemon.description}</p>

    <dialog id = "pokemon-stats">
        <h2 id = "dialog-title">${pokemon.name}</h2>
        <li id = "ability">Ability: ${pokemon.ability}</li>
        <li id = "footprint">Footprint: ${pokemon.footprint}</li>
        <li id = "dexIndex">DexIndex: #${pokemon.dexIndex}</li>
        <li id = "type">Type: ${pokemon.type}</li>
        <li id = "subType">Subtype: ${pokemon.subtype}</li>
        <li id = "weakness">Weakness: ${pokemon.weakness}</li>
        <li id = "gender">Gender: ${pokemon.gender}</li>
        <li id = "weight">Weight: ${pokemon.weight} kg</li>
        <li id = "height">Height: ${pokemon.height} meter</li>
        <li id = "generation">Generation: ${pokemon.generation}</li>
        <li id = "gameVersion">Game Version: ${pokemon.spilVersion}</li>
        <li id = "evolve">Can it evolve?: ${pokemon.canEvolve}</li>
        <li id = "health">Health: ${pokemon.health}</li>
        <li id = "attack">Attack: ${pokemon.attack}</li>
        <li id = "defense">Defense: ${pokemon.defense}</li>
        <li id = "specialAttack">Special Attack: ${pokemon.specialAttack}</li>
        <li id = "specialDefense">Special Defense: ${pokemon.specialDefense}</li>
        <li id = "speed">Speed: ${pokemon.speed}</li>
            <form method="dialog">
		     <button>Close</button>
            </form>
    </dialog>
    </article>
`);

document.querySelector("#pokemons article:last-child").addEventListener("click", pokemonClicked)
        function pokemonClicked() {
            console.log(pokemon);
            document.querySelector("#dialog-title").textContent = `Name: ${pokemon.name}`
            document.querySelector("#pokemon-stats").showModal()
        }
}
