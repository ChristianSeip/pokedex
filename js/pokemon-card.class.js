class PokemonCard  {

    pokemon;

    constructor(pokemon, documentElement) {
        this.pokemon = pokemon;
        this.addPokemonPreviewToList();
    }

    addPokemonPreviewToList() {
        document.getElementById('pokemon-list').innerHTML += this.getPokemonPreviewHTML();
    }

    getPokemonPreviewHTML() {
        return `
            <li class="${this.pokemon.getBackgroundColor(this.pokemon.types[0].type.name)}" onclick="showPokedex(${this.pokemon.id})">
                <img src="${this.pokemon.getImage()}">
                <h3>${this.pokemon.getName()}</h3>
            </li>
        `;
    }

}