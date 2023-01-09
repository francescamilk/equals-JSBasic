// Two branches
const age = 13;

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can\'t vote.');
}

// Three or more branches
const action = 'read'

if (action === 'read') {
  console.log('Entering reading mode...');
} else if (action === 'write') {
  console.log('Entering writing mode...');
} else {
  console.log('Sorry, wrong choice...');
}
