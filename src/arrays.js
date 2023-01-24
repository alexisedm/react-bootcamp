const persona = [
 ['nombre', 'Penelope'],
 ['edad', 23]
];

// Convert an object
// { nombre: 'Valeria', edad: 27 }
const array = new Array(10);
console.log(array);
console.log(persona);


let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = [ "David", ...contacts, "Lily" ];

contacts.push("John");

console.log(personalFriends);