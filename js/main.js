let API = 'https://pokeapi.co/api/v2/pokemon/';

async function init() {
    for(let i = 1; i < 152; i++) {
        fetchData(i.toString()).then((pokemon) => {
            new PokemonCard(new Pokemon(pokemon), document.getElementById('pokemon-list'));
        });
    }
}

/**
 * Fetch pokemon data from api.
 *
 * @param {string} param - pokemon name or id
 * @returns {Promise}
 */
async function fetchData(param) {
    let response = await fetch(API + param);
    if(response.ok)  {
        return await response.json();
    }
    else {
        return {};
    }
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
    fetchData(searchString.toString().toLowerCase()).then((result) => {
        if(Object.keys(result).length === 0) {
            document.getElementById('modal-content').innerHTML = 'Oops! Cant fetch pokemon data. Maybe this pokemon does not exist.';
            document.getElementById('modal-content').classList.add('bg-warning');
            switchModal();
            return;
        }
        let pokemon = new Pokemon(result);
            new Pokedex(pokemon);
    });
}

/**
 * Returns string with first char as upper case.
 *
 * @returns {string}
 */
String.prototype.firstCharToUpper = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}