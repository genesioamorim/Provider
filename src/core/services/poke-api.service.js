function getPokemons() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=200&offset=200", false)
    request.send();
    return request.responseText
}

function getPoke(pokemon) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`, false)
    request.send();
    return request.responseText
}

function getPokeDescription(pokemon) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`, false)
    request.send();
    return request.responseText
}


