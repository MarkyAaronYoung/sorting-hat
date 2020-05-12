// I want to create a student array so I can add new Hogwart students into as objects
// They have to be assigned to one of four houses that are constants
// I will need to create an array of expelled students

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
 //function to add value of button id #sortButton to student array
const addStudent = () => {
  const studentName = document.getElementById('nameInput').value;
  console.log(studentName);
  return students.push(studentName);
  console.log(students); 
}

  const sortedHouse = houses[Math.floor(Math.random() * 4)].house
  console.log(sortedHouse);




// function that creates a card by looping over the new student array created by the addStudent function

const buildStudentCards = (students) => {
  let domString = ''; 

  addStudent();

  for (let i = 0; i < students.length; i++){
  
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${students[i].name}</h5>
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

init();
