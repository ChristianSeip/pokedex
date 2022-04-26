class Pokedex {

    pokemon;

    constructor(pokemon) {
        this.pokemon = pokemon;
        document.getElementById('modal-content').innerHTML = this.getPokedexHTML();
        switchModal();
    }

    getPokedexHTML() {
        return `
        <div id="pokemon-header" class="${this.pokemon.getBackgroundColor(this.pokemon.types[0].type.name)}">
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

    getTypeListHTML() {
        let types = this.pokemon.getTypes();
        let list = ``;
        for(let i = 0; i < types.length; i++) {
            list += `<li>${types[i].type.name.firstCharToUpper()}</li>`
        }
        return list;
    }

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