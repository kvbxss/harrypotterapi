const items = { ...localStorage };

let FavCharacters = Object.entries(items);

let FavCharactersHtml = "";

function renderFavCharacters() {
  FavCharacters.map((item, index) => {
    FavCharactersHtml += `<div class="fav-character-card">
                   <h1> ${item[1]}</h1>
                   <button onclick=deleteFromFav("${item[0]}")> ${item[0]}</button>
        </div>`;
  });

  document.getElementById("fav-container").innerHTML = FavCharactersHtml;
}

renderFavCharacters();

function deleteFromFav(id) {
  localStorage.removeItem(id);
  location.reload();
  return false;
}