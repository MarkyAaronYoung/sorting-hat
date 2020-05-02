const students = [
  { fullName: '',
    house: 'Gryffindor'
  },
  {
    fullName: '',
    house: 'Hufflepuff'
  },
  {
  fullName: '',
  house: 'Slytherin'
  },
  {
    fullName: '',
    house: 'Ravenclaw'
  }
]

console.log(students);

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildStudentCards = (studentCollection) => {
  let domString = '';

  for (let i = 0; i < studentCollection.length; i++) {
    domString += `
      <div class="card" id="studentCards" style="width: 18rem;">
         <img class="card-img-top" src=".../100px180/" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${studentCollection[i].fullName}</h5>
          <p class="card-text">${studentCollection[i].house}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;
  }

  printToDom('#studentCards', domString);
}

// const filterPiesEvent = (event) => {
//   const buttonId = event.target.id;
//   // console.log('click worked');
//   // console.log(event.target);
//   //get all pies
//   // only show luke pies
//   const tempPieCollection = [];

//   if (buttonId === 'all') {
//     buildPies(pies);
//     return;
//   }

//   for (let i = 0; i < pies.length; i++) {
//     if (pies[i].owner === buttonId) {
//       tempPieCollection.push(pies[i]);
//     }
//   }

//   buildPies(tempPieCollection);
// }


// const clickEvents = () => {
//  document.querySelector('#luke').addEventListener('click', filterPiesEvent);
//  document.querySelector('#michael').addEventListener('click', filterPiesEvent);
//  document.querySelector('#matt').addEventListener('click', filterPiesEvent);
//  document.querySelector('#all').addEventListener('click', filterPiesEvent);
// }


const init = () => {
  buildStudentCards(students);
  clickEvents();
}

init();
