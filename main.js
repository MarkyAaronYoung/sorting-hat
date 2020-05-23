let students = [];

const houses = [
  {
    house: 'gryffindor',
  },
  {
    house: 'hufflepuff',
  },
  {
    house: 'ravenclaw',
  },
  {
    house: 'slytherin'
  }
]

let expelledStudents = [];

// This is my print to dom function
const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}
 //function to add value of button id #sortButton to student array/ This won't console.log out.
  const studentName = document.getElementById('studentName').value;
  console.log(studentName);
 
  const sortedHouse = houses[Math.floor(Math.random() * 4)].house
  console.log(sortedHouse);

  
  


// function that creates a card by looping over the new student array created by the addStudent function

const buildStudentCards = (studentArray) => {
  let domString = ''; 
  

  for (let i = 0; i < studentArray.length; i++){
  
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${studentArray[i].name}</h5>
          <p class="card-text">${sortedHouse}</p>
          <a href="#" class="btn btn-primary">Expel</a>
        </div>
      </div>
    `;
  };
  printToDom('#studentCard', domString);
  console.log('do I work?')
}

// click event when the button with id = sortButton is pushed
const clickEvents = () => {
    document.querySelector('#sortButton').addEventListener('click', buildStudentCards);
}

// init function to call buildStudentCards and clickEvent
const init = () => {
  buildStudentCards(students);
  clickEvents();
};
