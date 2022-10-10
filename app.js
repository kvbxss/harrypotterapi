


function allStudents() {

fetch("https://hp-api.herokuapp.com/api/characters/students")
.then((data) => {
  return data.json();
})
.then((objectData) => {
  console.log(objectData);
  let tableData = "";
  objectData.map((values) => {
    tableData +=`
    <tr>
    <td id="name">${values.name}</td>

    <td id="yearOfBirth">${values.yearOfBirth}</td>

    <td id="house">${values.house}</td>

    <td id="wizard">${values.wizard}</td>

    <td id="ancestry">${values.ancestry}</td>

    <td id="is-stud-staff">${values.hogwartsStudent}</td>
    </tr>`;
  });
  document.getElementById("table-body").innerHTML = tableData;
})
.catch((error) => console.log(error));

}

function Gryffindor() {

  fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData);
    let tableData = "";
    objectData.map((values) => {
      tableData +=`
      <tr>
      <td id="name">${values.name}</td>
  
      <td id="yearOfBirth">${values.yearOfBirth}</td>
  
      <td id="house">${values.house}</td>
  
      <td id="wizard">${values.wizard}</td>
  
      <td id="ancestry">${values.ancestry}</td>
  
      <td id="is-stud-staff">${values.hogwartsStudent}</td>
      </tr>`;
    });
    document.getElementById("table-body").innerHTML = tableData;
  })
  .catch((error) => console.log(error));
  
  }

function Slytherin() {

    fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin")
    .then((data) => {
      return data.json();
    })
    .then((objectData) => {
      console.log(objectData);
      let tableData = "";
      objectData.map((values) => {
        tableData +=`
        <tr>
        <td id="name">${values.name}</td>
    
        <td id="yearOfBirth">${values.yearOfBirth}</td>
    
        <td id="house">${values.house}</td>
    
        <td id="wizard">${values.wizard}</td>
    
        <td id="ancestry">${values.ancestry}</td>
    
        <td id="is-stud-staff">${values.hogwartsStudent}</td>
        </tr>`;
      });
      document.getElementById("table-body").innerHTML = tableData;
    })
    .catch((error) => console.log(error));
    
    }

function Hufflepuff() {

      fetch("https://hp-api.herokuapp.com/api/characters/house/hufflepuff")
      .then((data) => {
        return data.json();
      })
      .then((objectData) => {
        console.log(objectData);
        let tableData = "";
        objectData.map((values) => {
          tableData +=`
          <tr>
          <td id="name">${values.name}</td>
      
          <td id="yearOfBirth">${values.yearOfBirth}</td>
      
          <td id="house">${values.house}</td>
      
          <td id="wizard">${values.wizard}</td>
      
          <td id="ancestry">${values.ancestry}</td>
      
          <td id="is-stud-staff">${values.hogwartsStudent}</td>
          </tr>`;
        });
        document.getElementById("table-body").innerHTML = tableData;
      })
      .catch((error) => console.log(error));
      
      }

function Ravenclaw() {

        fetch("https://hp-api.herokuapp.com/api/characters/house/ravenclaw")
        .then((data) => {
          return data.json();
        })
        .then((objectData) => {
          console.log(objectData);
          let tableData = "";
          objectData.map((values) => {
            tableData +=`
            <tr>
            <td id="name">${values.name}</td>
        
            <td id="yearOfBirth">${values.yearOfBirth}</td>
        
            <td id="house">${values.house}</td>
        
            <td id="wizard">${values.wizard}</td>
        
            <td id="ancestry">${values.ancestry}</td>
        
            <td id="is-stud-staff">${values.hogwartsStudent}</td>
            </tr>`;
          });
          document.getElementById("table-body").innerHTML = tableData;
        })
        .catch((error) => console.log(error));
        
        }


const charactersEl = document.getElementById("characters"); 
let modal=""
const modalEl = document.getElementById("modal")

function getCharacters(){
fetch("https://hp-api.herokuapp.com/api/characters")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData);
    let tableData = "";
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
          const characterId = e.target.id;
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
                     <button id="dodajUlub" onclick=closeModal()>Close</button>
                     <br>
                     <button id="dodajUlub"> Add to Fav </button>
          `
          modalEl.innerHTML = modal
  
          document.getElementById("dodajUlub").addEventListener('click', e => {
              console.log(characterHtml)
              localStorage.setItem(characterId, characterHtml)
          })
      })
    }
  })
  .catch((error) => console.log(error));

 

  }
function closeModal() {
  modalEl.style.display = "none"
}

function addToFav(charHtml) {

console.log(charHtml)
}
getCharacters();
console.log(JSON.parse(localStorage.getItem(1)))


let data, table, sortCol;
let sortAsc = false;

document.querySelectorAll('#characters thead tr th').forEach(t => {
  t.addEventListener('click', sort, false);
});

function renderTable() {
let result ='';
data.forEach(c => {
  result += `<tr>
  <td id="name">${c.name}</td>

  <td id="yearOfBirth">${c.yearOfBirth}</td>

  <td id="house">${c.house}</td>

  <td id="wizard">${c.wizard}</td>

  <td id="ancestry">${c.ancestry}</td>

  <td id="is-stud-staff">${c.hogwartsStudent}</td>
  </tr>`;
});
table.innerHTML = result;
}

function sort(e) {
  let thisSort = e.target.dataset.sort;
  if(sortCol === thisSort) sortAsc = !sortAsc;
  sortCol = thisSort;
  data.sort((a, b) => {
    if(a[sortCol] < b[sortCol]) return sortAsc?1:-1;
    if(a[sortCol] > b[sortCol]) return sortAsc?-1:1;
    return 0;
  });
  getCharacters();
}