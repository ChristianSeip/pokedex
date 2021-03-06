class Pokemon {

    name;
    id;
    types;
    image;
    height;
    weight;
    stats;
    abilities;

    constructor(pokemon) {
        this.initData(pokemon);
    }

    /**
     * Init fetched pokemon data.
     *
     * @param {object} pokemon - JSON object of pokemon
     */
    initData(pokemon) {
        this.name = pokemon.name;
        this.id = pokemon.id;
        this.types = pokemon.types;
        this.image = pokemon.sprites.front_default;
        this.height = pokemon.height;
        this.weight = pokemon.weight;
        this.stats = pokemon.stats;
        this.abilities = pokemon.abilities;
    }

    /**
     * Get formatted pokemon name.
     *
     * @returns {string}
     */
    getName() {
        return this.name.firstCharToUpper();
    }

    /**
     * Get formatted pokemon id with leading zeros.
     *
     * @returns {string}
     */
    getId() {
        let pokeId = '#';
        if(this.id < 100) {
            pokeId += '0';
        }
        if(this.id < 10) {
            pokeId += '0';
        }
        return pokeId + this.id.toString();
    }

    /**
     * Get pokemon types.
     *
     * @returns {array}
     */
    getTypes() {
        return this.types;
    }

    /**
     * Get image path of the pokemon.
     *
     * @returns {string}
     */
    getImage() {
        return this.image;
    }

    /**
     * Get height of the pokemon.
     *
     * @returns {int}
     */
    getHeight() {
        return this.height;
    }

    /**
     * Get weight of the pokemon.
     *
     * @returns {int}
     */
    getWeight() {
        return this.weight;
    }

    /**
     * Get pokemons list of stats.
     *
     * @returns {array}
     */
    getStats() {
        return this.stats;
    }

    /**
     * Get pokemons list of abilities.
     *
     * @returns {array}
     */
    getAbilities() {
        return this.abilities;
    }

    /**
     * Get background color css class by pokemon type.
     *
     * @param {string} type
     * @returns {string}
     */
    getBackgroundColor(type) {
        let color = '';

        switch (type.toLowerCase()) {
            case 'grass':
            case 'bug':
                color = 'bg-green';
                break;
            case 'water':
            case 'ice':
                color = 'bg-blue';
                break;
            case 'fire':
                color = 'bg-red';
                break;
            case 'psychic':
            case 'fairy':
                color = 'bg-purple';
                break;
            case 'electric':
                color = 'bg-yellow';
                break;
            case 'rock':
            case 'ground':
                color = 'bg-brown';
                break;
            case 'steel':
                color = 'bg-gray';
                break;
            case 'poison':
                color = 'bg-light-green ';
                break;
            case 'dark':
            case 'normal':
            default:
                color = 'bg-black';
                break;
        }

        return color;
    }
}