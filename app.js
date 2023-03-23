"use strict";
window.addEventListener("load", initApp)

const zacian = {
    description: 
    "Known as a legendary hero, this Pokémon absorbs metal particles, transforming them into a weapon it uses to battle. Now armed with a weapon it used in ancient times, this Pokémon needs only a single strike to fell even Gigantamax Pokémon",
    name: "Zacian",
    ability: "Intrepid Sword",
    footprint: "Unknown",
    dexIndex: "0888",
    type: "Fairy",
    subtype:"Steel",
    weakness: "Fire",
    weakness2:"Ground",
    gender: "Unknown",
    weight: "110.0",
    height: "2.8",
    generation: "Generation VIII",
    spilVersion:"Pokemon Sword",
    canEvolve:"false",
    health: "6",
    attack: "8",
    defense: "7",
    specialAttack: "7",
    specialDefense:"9",
    speed:"5",
}

function initApp() {
    showPokemon(zacian)
}

function showPokemon(pokemon) {
console.log("Pokemon: Zacian");
const pokemonZacian = /*html*/ `
<article>
<h1>Zacian</h1>
<image src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/888_f2.png"></image><br>
<div id="parent">
    <p>${pokemon.description}</p>
    <li>Pokemon Name: ${pokemon.name}</li>
    <li>Pokedex Nr: #${pokemon.dexIndex}</li>
    <li>Footprint: ${pokemon.footprint}</li>
    <li>Ability: ${pokemon.ability}</li>
    <li>Type: ${pokemon.type}</li>
    <li>Subtype ${pokemon.subtype}</li>
    <li>Weakness: ${pokemon.weakness} & ${pokemon.weakness2}</li>
    <li>Gender: ${pokemon.gender}</li>
    <li>Weight: ${pokemon.weight} kg</li>
    <li>Height: ${pokemon.height} meter</li>
    <li>Gender: ${pokemon.gender}</li>
    <li>Generation: ${pokemon.generation}</li>
    <li>Game Version: ${pokemon.spilVersion}</li>
    <li>Evolve: ${pokemon.canEvolve}</li>
    </div>
</article>
`
const pokemonZacianStats =/*html*/`
<article>
<h2>Pokemon Stats</h2>
<li>Health: ${pokemon.health}</li>
<li>Speed: ${pokemon.speed}</li>
<li>Attack: ${pokemon.attack}</li>
<li>Defense: ${pokemon.defense}</li>
<li>Special Attack: ${pokemon.specialAttack}</li>
<li>Special Defense: ${pokemon.specialDefense}</li>
</article>
`
document.querySelector("#pokemons").insertAdjacentHTML("beforeend", pokemonZacian);
document.querySelector("#pokemons").insertAdjacentHTML("beforeend", pokemonZacianStats);
}