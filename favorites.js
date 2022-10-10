const items = { ...localStorage };

let FavCharacters = Object.entries(items);
let amountOfCards = 3;
let FavCharactersHtml = "";

let array = []
Object.keys(items).map( (element) =>{
  array.push( { object: JSON.parse(items[element]), id: element} )
  console.log(array)
})

function renderFavCharacters() {
  array.map((item) => {
    FavCharactersHtml += `
    <div class="card">
          ${item.object.image ? `<img class="img-modal" src="${item.object.image}">` : ""}
          <div class="data-modal">
              <h3>${item.object.name}</h3>
              <br>
              <p>${item.object.house}</p>
              <br>
              <h4>${item.object.ancestry}</h4>
          </div>
      <button id="usunZUlubionychBtn" onclick=deleteFromFav("${item.id}")> Delete from Fav </button>           
        </div>`;
  });
  
  document.getElementById("fav-container").innerHTML = FavCharactersHtml;
}

renderFavCharacters();

function changeAmountOfCards(amount) {
  const styledContainer = document.getElementById('fav-container').style
  styledContainer.display = "grid"
  styledContainer.gridTemplateColumns = `repeat(${amount}, 1fr)`
}

function deleteFromFav(id) {
  localStorage.removeItem(id);
  location.reload();
  return false;
}