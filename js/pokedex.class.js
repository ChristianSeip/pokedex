class Pokedex {

    pokemon;

    constructor(pokemon) {
        this.pokemon = pokemon;
        document.getElementById('modal-content').innerHTML = this.getPokedexHTML();
        switchModal();
    }

    /**
     * Get pokemon informations formatted as html element.
     *
     * @returns {string}
     */
    getPokedexHTML() {
        let bgClass = '';
        this.pokemon.types.forEach((type) => {
            if(bgClass === '') {
                bgClass = this.pokemon.getBackgroundColor(type.type.name);
            }
        });
        return `
        <div id="pokemon-header" class="${bgClass}">
            <div class="pokemon-header-title">
                <h2 id="pokemon-name">${this.pokemon.getName()}</h2>
                <span id="pokemon-id">${this.pokemon.getId()}</span>
            </div>
            <div id="pokemon-type">
                <ul>
                ${this.getTypeListHTML()}
                </ul>
            </div>
            <div id="pokemon-image">
                <img src="${this.pokemon.getImage()}">
            </div>
        </div>
        <div class="content">
            <div id="pokemon-data">
                <dl>
                ${this.getStatListHTML()}
                </dl>
            </div>
        </div>
        `;
    }

    /**
     * Get formatted list of pokemon types.
     *
     * @returns {string}
     */
    getTypeListHTML() {
        let types = this.pokemon.getTypes();
        let list = ``;
        for(let i = 0; i < types.length; i++) {
            list += `<li>${types[i].type.name.firstCharToUpper()}</li>`
        }
        return list;
    }

    /**
     * Get formatted list of pokemon base stats.
     *
     * @returns {string}
     */
    getStatListHTML() {
        let stats = this.pokemon.getStats();
        let list = `
            <dt>Height:</dt>
            <dd>${this.pokemon.getHeight()}</dd>
            <dt>Weight:</dt>
            <dd>${this.pokemon.getWeight()}</dd>
        `;
        for(let i = 0; i < stats.length; i++) {
            list += `<dt>${stats[i].stat.name.firstCharToUpper()}</dt>`;
            list += `<dd>${stats[i].base_stat}</dd>`;
        }
        return list;
    }

}