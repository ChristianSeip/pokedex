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
}

/**
 * Display general header infos abut 'pokemon'.
 */
function getHeadInfo() {
    document.getElementById('pokemon-name').innerText = pokemon.name.firstCharToUpper();
    document.getElementById('pokemon-id').innerText = '#' + pokemon.id;
    document.getElementById('pokemon-type').innerText = pokemon.types[0].type.name;
    document.getElementById('pokemon-header').className = TYPES[pokemon.types[0].type.name];
    document.getElementById('pokemon-image').getElementsByTagName('img')[0].src = pokemon.sprites.front_default;
}

/**
 * Returns string with first char as upper case.
 *
 * @returns {string}
 */
String.prototype.firstCharToUpper = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}