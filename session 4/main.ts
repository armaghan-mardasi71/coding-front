// function half(r: number): number {
//   const p = 3.14;
//   return (2 * p * r) / 2 + 2 * r;
// }

// const a = half(2);
// console.log(a);
// -------------------------------------------
// ex 2:
// let userBasket = ["pen"];
// function addToCart(product: string) {
//   userBasket.push(product);
// }
// addToCart("book");
// addToCart("phone");
// console.log(userBasket);
// -------------------------------------------

// ex 3:

// let contacts = [
//   { id: 1, name: "armaghan", number: 9309665106 },
//   { id: 2, name: "sara", number: 9124562123 },
//   { id: 3, name: "hadis", number: 9365469878 }
// ];
// console.log(contacts[1]);
//---------------------------------------------

// ex 4:
let contacts = [
  { id: 1, name: "armaghan", number: 9309665106 },
  { id: 2, name: "sara", number: 9124562123 },
  { id: 3, name: "hadis", number: 9365469878 }
];
let userInput = prompt("enter your name:");
if (userInput) {
  findContact(userInput);
}

function findContact(contactName: string) {
  let mainContact = contacts.some((person) => {
    return person.name === contactName;
  });

  if (mainContact) {
    console.log("contact is available");
  } else {
    console.log("Sorry,contact is NOT available");
  }
}
