
function showPage(loading) {
    if (loading) {
        document.getElementById("loader").style.display = "none";
        document.getElementById("card").style.display = "flex";
    } else {
        document.getElementById("loader").style.display = "block";
        document.getElementById("card").style.display = "none";
    }
}

function createCard(pokemon) {
    poke = JSON.parse(getPoke(pokemon.name))
    let div1 = document.createElement('div');
    div1.setAttribute("id", "cardPoke");
    div1.classList.add("col", "mb-3", "cardPoke");
    let div2 = document.createElement('div');
    div2.classList.add("card", "shadow-sm");

    let img = document.createElement('img');
    img.classList.add("bd-placeholder-img", "card-img-top");
    img.src = poke.sprites.front_default;
    div2.appendChild(img)
    let cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    let description = document.createElement('p');
    description.classList.add("card-tex");
    description.innerHTML = pokemon.name
    let divButton = document.createElement('div');
    divButton.classList.add("d-flex", "justify-content-between", "align-items-center");
    let divButtonGroup = document.createElement('div');
    divButtonGroup.classList.add("btn-group");

    let button = document.createElement('button');
    button.classList.add("btn", "btn-sm", "btn-outline-primary");
    button.innerHTML = "detalhes"
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#exampleModal");
    button.setAttribute('onClick', `modalPoke('${pokemon.name}')`);
    divButtonGroup.appendChild(button)
    divButton.appendChild(divButtonGroup)
    cardBody.appendChild(description)
    cardBody.appendChild(divButton)
    div2.appendChild(cardBody)
    div1.appendChild(div2)

    return div1;
}

function modalPoke(poke) {
    if (document.getElementById('modalContent')) {
        document.getElementById('modalContent').remove();
    }
    let pokemon = JSON.parse(getPoke(poke))
    let description = JSON.parse(getPokeDescription(poke))
    let titleModal = document.getElementById("titleModal");
    titleModal.innerHTML = poke
    modalBody = document.getElementById("modalBody");
    let div1 = document.createElement('div');
    div1.setAttribute("id", "modalContent");
    div1.classList.add("row");
    let div2 = document.createElement('div');
    div2.classList.add("col-5");
    let div3 = document.createElement('div');
    div3.classList.add("col-7");
    div3.style.height = "170px"
    div3.style.overflowY = "scroll";
    let img = document.createElement('img');
    img.classList.add("bd-placeholder-img", "card-img-top");
    img.src = pokemon.sprites.front_default;
    div2.appendChild(img)

    description.flavor_text_entries.forEach(element => {
        let text = document.createElement('p');
        text.classList.add("m-0");
        text.innerHTML = element.language.name === "en" ? element.flavor_text : '';
        div3.appendChild(text)
    });
    div1.appendChild(div2)
    div1.appendChild(div3)
    modalBody.appendChild(div1)

}

function lodadData() {
    showPage(false)
    let data = getPokemons()
    let result = JSON.parse(data);
    pokemons = result.results;
    // console.log(pokemons)
    let card = document.getElementById("card")
    pokemons.forEach(pokemon => {
        pokeCard = createCard(pokemon)
        card.appendChild(pokeCard)
    });
    setTimeout(() => {
        showPage(true)
    }, 2000);
}

function main() {
    lodadData();
}
main()