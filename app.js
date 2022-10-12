const charactersEl = document.getElementById("characters"); 
let modal=""
const modalEl = document.getElementById("modal")


async function allStudents() {

  let tableData = "";
  let objectData;

const res = await fetch("https://hp-api.herokuapp.com/api/characters/students");
objectData = await res.json();
  

  objectData.map((values) => {
    tableData +=`
    <tr class="character-container">
    <td id="name">${values.name}</td>

    <td id="yearOfBirth">${values.yearOfBirth}</td>

    <td id="house">${values.house}</td>

    <td id="wizard">${values.wizard}</td>

    <td id="ancestry">${values.ancestry}</td>

    <td id="is-stud-staff">${values.hogwartsStudent}</td>
    </tr>`;
  });
  document.getElementById("table-body").innerHTML = tableData;
  modalEl.style.display = "none";
    
    const charactersContainersEl = document.getElementsByClassName("character-container")
    for(let i = 0; i < charactersContainersEl.length; i++) {
      charactersContainersEl[i].addEventListener('click', (e) => {
          modalEl.style.display = "block";
          const characterHtml = objectData[i];
          const characterId = e.target.parentElement.id;
          console.log(characterId);
          modal = ` 
          <div class="card">
          <img class="img-modal" src="${objectData[i].image}">
          <div class="data-modal">
              <h3>${objectData[i].name}</h3>
              <br>
              <p>${objectData[i].house}</p>
              <br>
              <h4>${objectData[i].ancestry}</h4>
          </div>
      </div>
              
                     <br>
                     <button id="close" onclick=closeModal()>Close</button>
                     <br>
                     <button id="dodajUlub"> Add to Fav </button>
          `

          modalEl.innerHTML = modal
          document.getElementById("dodajUlub").addEventListener('click', () => {
              addToFav(characterId, characterHtml);
          })
      })
    }
  }







async function getCharacters(house){

  let tableData = "";
  let objectData;
  if(!house) { 
    const res = await fetch("https://hp-api.herokuapp.com/api/characters")
    objectData = await res.json();
    
  } else if(house){
    const res =  await fetch(`https://hp-api.herokuapp.com/api/characters/house/${house}`)
    objectData = await res.json();
    
  }


    objectData.map((values, index) => {
      tableData +=`
      <tr class="character-container" id=${index}>
      <td id="name">${values.name}</td>

      <td id="yearOfBirth">${values.yearOfBirth}</td>

      <td id="house">${values.house}</td>

      <td id="wizard">${values.wizard}</td>

      <td id="ancestry">${values.ancestry}</td>

      <td id="is-stud-staff">${values.hogwartsStudent}/ ${values.hogwartsStaff}</td>
      </tr>`;
    });
    document.getElementById("table-body").innerHTML = tableData;

    modalEl.style.display = "none";
    
    const charactersContainersEl = document.getElementsByClassName("character-container")
    for(let i = 0; i < charactersContainersEl.length; i++) {
      charactersContainersEl[i].addEventListener('click', (e) => {
          modalEl.style.display = "block";
          const characterHtml = objectData[i];
          const characterId = e.target.parentElement.id;
          console.log(characterId);
          modal = ` 
          <div class="card">
          <img class="img-modal" src="${objectData[i].image}">
          <div class="data-modal">
              <h3>${objectData[i].name}</h3>
              <br>
              <p>${objectData[i].house}</p>
              <br>
              <h4>${objectData[i].ancestry}</h4>
          </div>
      </div>
              
                     <br>
                     <button id="close" onclick=closeModal()>Close</button>
                     <br>
                     <button id="dodajUlub"> Add to Fav </button>
          `

          modalEl.innerHTML = modal
          document.getElementById("dodajUlub").addEventListener('click', () => {
              addToFav(characterId, characterHtml);
          })
      })
    }
  }

function closeModal() {
  modalEl.style.display = "none"
}

function addToFav(id, objectToParse) {
  console.log(id, objectToParse);
  localStorage.setItem(id, JSON.stringify(objectToParse));
}



let ascendingOrder = true;

function sortCharactersByName(tag) {

  const selector = element => element.querySelector(`${tag}`).innerText;

  console.log(selector);

 
  const isNumeric = true;

  const elements = [...document.querySelectorAll(".character-container")];
  const parentElement = elements[0].parentNode;
 
  const collator = new Intl.Collator(undefined, {
    numeric: isNumeric,
    sensitivity: "base",
  });
  
  elements
    .sort((elementA, elementB) => {
      const [firstElement, secondElement] = ascendingOrder
        ? [elementA, elementB]
        : [elementB, elementA];
      const textOfFirstElement = selector(firstElement);
      const textOfSecondElement = selector(secondElement);
     
      return collator.compare(textOfFirstElement, textOfSecondElement);
     
    })
    .forEach((element) => parentElement.appendChild(element));
    if (ascendingOrder) {
      ascendingOrder = false;
    }
    else {
      ascendingOrder = true;
    }
    console.log(ascendingOrder)
}

getCharacters();

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


function openFav () {
  window.open('./favorites.html', "_self")
}

