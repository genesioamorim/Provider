function searchPoke() {
    showPage(false);
    let form = document.getElementById("inputSearch").value;
    let busca = form ?  getPoke(form.toLowerCase()) : "Not Found" ;
    if (busca != "Not Found") {
        card = document.getElementById("card")
        while (document.getElementById('cardPoke')) {
            document.getElementById('cardPoke').remove();
        }
        card.appendChild(createCard(JSON.parse(busca)));
    } else {
        alert("Não foi possivel encontrar o pokemon com este nome.");
        reset();
    }
    setTimeout(() => {
        showPage(true);
    }, 2000);
}

function reset() {
    showPage(false);
    while (document.getElementById('cardPoke')) {
        document.getElementById('cardPoke').remove();
    }
    let inputSearch = document.getElementById("inputSearch");
    inputSearch.value = "";
    lodadData();
}