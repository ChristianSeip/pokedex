const API = 'https://pokeapi.co/api/v2/pokemon/';

const TYPES = {
    'grass': 'bg-green',
    'water': 'bg-blue',
    'fire': 'bg-red',
    'electric': 'bg-yellow',
    'psychic': 'bg-purple',
    'rock': 'bg-brown',
};

function init() {
    getPokemon('Pikachu');
}

async function getPokemon(name) {
    let response = await fetch(API + name.toLowerCase());
    let json = await response.json();

    document.getElementById('pokemon-name').innerText = json.name.charAt(0).toUpperCase() + json.name.slice(1);
    document.getElementById('pokemon-id').innerText = '#' + json.id;
    document.getElementById('pokemon-type').innerText = json.types[0].type.name;
    document.getElementById('pokemon-header').className = TYPES[json.types[0].type.name];
    document.getElementById('pokemon-image').getElementsByTagName('img')[0].src = json.sprites.front_default;
}