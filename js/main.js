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

function getImpress() {
    let name = 'Your Name';
    let address = 'Your Address';
    let phone = '+00 123 555 321';
    let mail = 'mail@example.com'

    document.getElementById('modal-content').innerHTML = `
    <div id="impress">
        <dl>
            <dt>Provider</dt>
            <dd><strong>${name}</strong><br>${address}</dd>
            <dt>Phone Contact</dt>
            <dd>${phone}</dd>
            <dt>Mail Contact</dt>
            <dd>${mail}</dd>
        </dl>
    </div>`;
    switchModal();
}

/**
 * Returns string with first char as upper case.
 *
 * @returns {string}
 */
String.prototype.firstCharToUpper = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}