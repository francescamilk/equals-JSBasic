const beatles = ['paul', 'john', 'ringo', 'george'];

// CRUD on Array
console.log(beatles)

// Create
beatles.push('George');
console.log(beatles);

// Read 
console.log(beatles[0]);

// Update
beatles[beatles.length - 1] = beatles[beatles.length - 1].toLowerCase();
console.log(beatles);

// Delete
beatles.splice(1, 2);
console.log(beatles);

// forEach iterator 
beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
});
