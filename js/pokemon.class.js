class Pokemon {

    API = 'https://pokeapi.co/api/v2/pokemon/';
    name;
    id;
    types;
    image;
    height;
    weight;
    stats;
    abilities;

     constructor(param) {
        if(param === typeof String) {
            param = param.toLowerCase();
        }
        this.fetchData(param);
    }

    /**
     * Fetch pokemon data from api.
     *
     * @param {string} param - pokemon name or id
     * @returns {Promise<void>}
     */
    async fetchData(param) {
        let response = await fetch(this.API + param);
        if(response.ok)  {
            let monster = await response.json();
            this.initData(monster);
        }
    }

    /**
     * Init fetched pokemon data.
     *
     * @param {object} monster - JSON object of pokemon
     */
    initData(monster) {
        this.name = monster.name;
        this.id = monster.id;
        this.types = monster.types;
        this.image = monster.sprites.front_default;
        this.height = monster.height;
        this.weight = monster.weight;
        this.stats = monster.stats;
        this.abilities = monster.abilities;
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

        switch (type) {
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
            case 'dark':
            case 'normal':
                color = 'bg-black';
                break;
        }

        return color;
    }
}