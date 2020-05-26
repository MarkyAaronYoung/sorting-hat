// I want to create a student array so I can add new Hogwart students into as objects
// They have to be assigned to one of four houses that are constants
// I will need to create an array of expelled students
let students = [];
const houses = [
  'gryffindor',
  'hufflepuff',
  'ravenclaw',
  'slytherin'
]
let expelledStudents = [];
// This is my print to dom function
const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const sortingHat = () =>{

  sortedHouse =  (Math.floor(Math.random() * 4))
  // console.log(sortedHouse)
  switch (sortedHouse) {
  case 0:
    return("Gryffindor");
    break;
  case 1:
    return ("Slytherin");
    break;
  case 2:
    return ("Hufflepuff");
    break;
  case 3:
    return ("Ravenclaw");
    break;
  }
}

const sortedStudent = [];
// console.log(sortedStudent);
const sortStudent = (event) => {
  // console.log(sortedStudent);
  let student = {};

  if (document.querySelector('#nameInput').value === "" ) {
    alert("FILL IN YOUR NAME");
    return
  }
  student.name = document.querySelector('#nameInput').value;
  student.house = sortingHat();
  student.unique = Math.floor(Math.random() * 100);
  sortedStudent.push(student);

  document.querySelector('#nameInput').value="";

  printedCard();
}

 //function to add value of button id #sortButton to student array
// const addStudent = () => {
  
//   console.log('addStudent')
//   const studentName = document.getElementById('nameInput').value;
//   console.log(studentName);
//   students.push(studentName);
//   buildStudentCards(students);
//   console.log(students); 

// }
// document.querySelector('#sortButton').addEventListener('click', addStudent);
//   const sortedHouse = () => {
//     const houseIndex = Math.floor((Math.random() * 4));
//     console.log('house index', houseIndex);
//     const studentHouse = houses[houseIndex];
//     return studentHouse;
// };


  // console.log(sortedHouse);
// function that creates a card by looping over the new student array created by the addStudent function
const buildStudentCards = (studentArray) => {
  let domString = ''; 
  for (let i = 0; i < studentArray.length; i++){
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${studentArray[i]}</h5>
          <p class="card-text">${sortedHouse()}</p>
          <a href="#" class="btn btn-primary">Expel</a>
        </div>
      </div>
    `;
  };
  console.log('do I work?')
  printToDom('#studentCard', domString);
}
// click event when the button with id = sortButton is pushed
const clickEvents = () => {
}
// init function to call buildStudentCards and clickEvent
const init = () => {
  // clickEvents();
};
// init();
