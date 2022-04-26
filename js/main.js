let pokemons = [];

function init() {
    for(let i = 1; i < 43; i++) {
        pokemons.push(new Pokemon(i));
    }
    let intval = setInterval(() => {
        if(pokemons[0].name !== typeof undefined) {
            loadCards();
            clearInterval(intval);
        }
    }, 800);
}

function loadCards() {
    pokemons.forEach((pokemon) => new PokemonCard(pokemon, document.getElementById('pokemon-list')));
}

function switchModal() {
    document.getElementById('modal').classList.toggle('hide');
}

function showPokedex(searchString) {
    let pokemon = new Pokemon(searchString);

    let intval = setInterval(() => {
        if(pokemon.name !== typeof undefined) {
            new Pokedex(pokemon);
            clearInterval(intval);
        }
    }, 800);
}

/**
 * Returns string with first char as upper case.
 *
 * @returns {string}
 */
String.prototype.firstCharToUpper = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}