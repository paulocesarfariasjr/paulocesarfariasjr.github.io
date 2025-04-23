
const pokemonPortugues = [
    "Bulbassauro", "Ivyssauro", "Venossauro", "Charmander", "Charmeleon", "Charizard", 
    "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", 
    "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", 
    "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", 
    "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", 
    "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", 
    "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", 
    "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", 
    "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", 
    "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", 
    "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", 
    "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", 
    "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", 
    "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", 
    "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", 
    "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", 
    "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", 
    "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", 
    "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", 
    "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", 
    "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", 
    "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", 
    "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", 
    "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", 
    "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", 
    "Mew"
];

const pokemonEnglish = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", 
    "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", 
    "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", 
    "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", 
    "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", 
    "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", 
    "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", 
    "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", 
    "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", 
    "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", 
    "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", 
    "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", 
    "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", 
    "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", 
    "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", 
    "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", 
    "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", 
    "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", 
    "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", 
    "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", 
    "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", 
    "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", 
    "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", 
    "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", 
    "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", 
    "Mew"
];

function ConvertedPokemon(pokemon){

    let port = pokemonPortugues.findIndex( p => p.toLowerCase() === pokemon.toLowerCase());
    let engli = pokemonEnglish.findIndex(p => p.toLowerCase() === pokemon.toLowerCase());
    if(port !== -1){
    
        let poke = pokemonEnglish[port]
        return poke.toLowerCase()
    
    }else if(engli !== -1){
    
        return pokemon.toLowerCase()
    
    }else{
    
        alert('escreva um nome de pokemon valido ,talvez vc esteja escrevendo pokemon um pouco errado ,revise novamente se o nome do pokemon esta correto');
    
    }
    
    }
    


document.getElementById('search').addEventListener('click', (event) => {


event.preventDefault();
event.stopPropagation();

    
const conteudo = document.querySelector('div#content');
const pesquisa = document.getElementById('pokemon').value;
const pesquisaToLowerCase = pesquisa.toLowerCase();


const pokemon = ConvertedPokemon(pesquisaToLowerCase);

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then( response => {



    return response.json();

})
.then( pokemon => {

    const imgs = document.querySelector('img.pokeImg');
    
    if(imgs){

        imgs.remove();

    }

    const img = document.createElement('img');
    img.className = 'pokeImg' ;
    img.height = 300 ;
    img.width = 300 ;
    img.src = pokemon.sprites.front_default ;


    conteudo.appendChild(img);

})
.catch(err =>{

    
    alert(err);


})















})