// CRUD in Object
const student = {
  firstName: 'Boris',
  lastName: 'Paillard'
}

// console.log(typeof(student));
// console.log(student);

// Read
console.log(student.firstName);
console.log(student['lastName']);

// Update
student.firstName = 'Romain';
console.log(student.firstName);