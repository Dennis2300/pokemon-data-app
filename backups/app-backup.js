"use strict";
window.addEventListener("load", initApp)

async function initApp() {
    console.log("JS is running!");
    //JSON objects insert here
    const zacian = await getPokemon("https://raw.githubusercontent.com/Dennis2300/Zacian-pokemon-data/main/zacian.json")
    showPokemon(zacian)


    //Detailed View button
    document.querySelector("#open_button").addEventListener("click", openDetailView)
}

async function getPokemon(url) {
    const response = await fetch(url)
    const data = response.json()
    return data;
}

function openDetailView() {
    console.log("open");
    document.querySelector("#open_button").removeEventListener("click",openDetailView)
    document.querySelector("#detailedView").showModal()
    document.querySelector("#close_button").addEventListener("click",closeDetailView)
}
function closeDetailView() {
    console.log("close");
    document.querySelector("#detailedView").close()
    document.querySelector("#open_button").addEventListener("click", openDetailView)
}

function showPokemon(pokemon) {
    document.querySelector("#pokemons").insertAdjacentHTML("beforeend",
    /*html*/`
<h1>${pokemon.name}</h1>
    <div id="picture">
        <image src="${pokemon.image}"></image>
    </div>
<p>${pokemon.description}</p>
<article>
    <div id="open_button">
        <button>Detailed View</button>
    </div>
<dialog id="detailedView">
    <h2>Zacian's Stats</h2>
    <li>Ability: ${pokemon.ability}</li>
    <li>Footprint: ${pokemon.footprint}</li>
    <li>DexIndex: #${pokemon.dexIndex}</li>
    <li>Type: ${pokemon.type}</li>
    <li>Subtype: ${pokemon.subtype}</li>
    <li>Weakness: ${pokemon.weakness} & ${pokemon.weakness2}</li>
    <li>Gender: ${pokemon.gender}</li>
    <li>Weight: ${pokemon.weight} kg</li>
    <li>Height: ${pokemon.height} meter</li>
    <li>Generation: ${pokemon.generation}</li>
    <li>Game Version: ${pokemon.spilVersion}</li>
    <li>Can it evolve?: ${pokemon.canEvolve}</li>
    <li>Health: ${pokemon.health}</li>
    <li>Attack: ${pokemon.attack}</li>
    <li>Defense: ${pokemon.defense}</li>
    <li>Special Attack: ${pokemon.specialAttack}</li>
    <li>Special Defense: ${pokemon.specialDefense}</li>
    <li>Speed: ${pokemon.speed}</li>
        <div id="close_button">
            <button>Close</button>
        </div>
</dialog>
</article>
`)
}
