const API = 'https://pokeapi.co/api/v2/pokemon/';
const TYPES = {
    'grass': 'bg-green',
    'water': 'bg-blue',
    'fire': 'bg-red',
    'electric': 'bg-yellow',
    'psychic': 'bg-purple',
    'rock': 'bg-brown',
};
let pokemon = {};

function init() {
    getPokemon('Pikachu');
}

/**
 *
 * @param name
 * @returns {Promise<void>}
 */
async function getPokemon(name) {
    let response = await fetch(API + name.toLowerCase());
    pokemon = await response.json();
    getHeadInfo();
    getGeneralInfo();
}

/**
 * Display general header infos abut the pokémon.
 */
function getHeadInfo() {
    document.getElementById('pokemon-name').innerText = pokemon.name.firstCharToUpper();
    document.getElementById('pokemon-id').innerText = '#' + pokemon.id;
    document.getElementById('pokemon-type').innerText = pokemon.types[0].type.name;
    document.getElementById('pokemon-header').className = TYPES[pokemon.types[0].type.name];
    document.getElementById('pokemon-image').getElementsByTagName('img')[0].src = pokemon.sprites.front_default;
}

/**
 * Display general data about the pokémon.
 */
function getGeneralInfo() {
    document.getElementById('pokemon-data').innerHTML = `
        <dl>
            <dt>Height:</dt>
            <dd>${pokemon.height}"</dd>
            <dt>Weight:</dt>
            <dd>${pokemon.weight} lb</dd>
        </dl>
    `;
}

/**
 * Display status data about the pokémon.
 */
function getStats() {
    let list = '';
    for(let i = 0; i < pokemon.stats.length; i++) {
        list += `
            <dt>${pokemon.stats[i].stat.name}</dt>
            <dd>${pokemon.stats[i].base_stat}</dd>
        `;
    }
    document.getElementById('pokemon-data').innerHTML = `
        <dl>
            ${list}
        </dl>
    `;
}

/**
 * Display the pokémons Abilities.
 */
function getAbilities() {
}

/**
 * Returns string with first char as upper case.
 *
 * @returns {string}
 */
String.prototype.firstCharToUpper = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}