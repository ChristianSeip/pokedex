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

/**
 * Load pokemon card list.
 */
function loadCards() {
    pokemons.forEach((pokemon) => new PokemonCard(pokemon, document.getElementById('pokemon-list')));
}

/**
 * Switch Modal visibility.
 */
function switchModal() {
    document.getElementById('modal').classList.toggle('hide');
}

/**
 * Show Pokedex window as modal.
 *
 * @param searchString
 */
function showPokedex(searchString) {
    let pokemon = new Pokemon(searchString);

    let t = 0;
    let intval = setInterval(() => {
        if(pokemon.name !== undefined) {
            new Pokedex(pokemon);
            clearInterval(intval);
        }
        if(t === 2) {
            document.getElementById('modal-content').innerHTML = 'Oops! Cant fetch pokemon data. Maybe this pokemon does not exist.';
            document.getElementById('modal-content').classList.add('bg-warning');
            switchModal();
            clearInterval(intval);
        }
        t++;
    }, 330);
}

/**
 * Returns string with first char as upper case.
 *
 * @returns {string}
 */
String.prototype.firstCharToUpper = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}