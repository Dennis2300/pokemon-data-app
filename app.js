"use strict";
window.addEventListener("load", initApp);

async function initApp() {
    console.log("JS is running!");
    const zacian = await getPokemon(
        "https://raw.githubusercontent.com/Dennis2300/Zacian-pokemon-data/main/zacian.json"
    );
    const zamazenta = await getPokemon(
        "https://raw.githubusercontent.com/Dennis2300/zamazenta-data/main/zamazenta.json"
    );
    const porygon = await getPokemon(
        "https://raw.githubusercontent.com/JaDetGodtDu/Pokemon-Data-App/main/data/porygon.json"
    )
    const abra = await getPokemon(
        "https://raw.githubusercontent.com/Jasper-Nielsen/pokemon-data/main/pokemon.JSON"
    )
    const Trevenant = await getPokemon(
        "https://raw.githubusercontent.com/JonLundby/data-aflevering/main/trevenant.json"
    )
    const slowbro = await getPokemon(
        "https://raw.githubusercontent.com/Elvasfar/Pokemon---dataapp/main/Slowbro.json"
        )
    const mewtwo = await getPokemon(
        "https://raw.githubusercontent.com/Jaes98/PokemonDataApp_Marcus/main/mewtwo.json"
    )

 showPokemon(zacian);
 showPokemon(zamazenta)
 showPokemon(porygon)
 showPokemon(abra)
 showPokemon(Trevenant)
 showPokemon(slowbro)
 showPokemon(mewtwo)
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
            document.querySelector("#dexIndex").textContent = `DexIndex: ${pokemon.dexIndex}`
            document.querySelector("#type").textContent = `Type: ${pokemon.type}`
            document.querySelector("#subType").textContent = `Subtype: ${pokemon.subtype}`
            document.querySelector("#weakness").textContent = `Weakness: ${pokemon.weakness}`
            document.querySelector("#gender").textContent = `Gender: ${pokemon.gender}`
            document.querySelector("#weight").textContent = `Weight: ${pokemon.weight}`
            document.querySelector("#height").textContent = `Height: ${pokemon.height}`
            document.querySelector("#generation").textContent = `Generation ${pokemon.generation}`
            document.querySelector("#gameVersion").textContent = `Spil: ${pokemon.spilVersion}`
            document.querySelector("#evolve").textContent = `Can it evolve?: ${pokemon.canEvolve}`
            document.querySelector("#health").textContent = `Health: ${pokemon.health}`
            document.querySelector("#attack").textContent = `Attack: ${pokemon.attack}`
            document.querySelector("#defense").textContent = `Defense: ${pokemon.defense}`
            document.querySelector("#specialAttack").textContent = `Special Attack: ${pokemon.specialAttack}`
            document.querySelector("#specialDefense").textContent = `Special Defense: ${pokemon.specialDefense}`
            document.querySelector("#speed").textContent = `Speed: ${pokemon.speed}`
            document.querySelector("#pokemon-stats").showModal()
        }
}
