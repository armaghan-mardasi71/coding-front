// function half(r: number): number {
//   const p = 3.14;
//   return (2 * p * r) / 2 + 2 * r;
// }

// const a = half(2);
// console.log(a);
// -------------------------------------------
// ex 2:
// interface Product {
//   name: string;
//   count: number;
// }

// let userBasket: Product[] = [];
// let userInput;
// let userInput2: number;
// while (userInput !== "end") {
//   userInput = prompt("enter product name:");

//   if (userInput !== "end") {
//     userInput2 = Number(prompt("enter product count:"));
//     if (userInput && userInput2) {
//       addToCart(userInput, userInput2);
//     }
//   }
// }

// function addToCart(userInput: string, userInput2: number) {
//   let newProduct = {
//     id: userBasket.length + 1,
//     name: userInput,
//     count: userInput2
//   };
//   userBasket.push(newProduct);
// }
// console.log(userBasket);

// -------------------------------------------

// ex 3:
// interface Contacts {
//   name: string;
//   phone: number;
// }
// let contacts: Contacts[] = [];
// let contactCount = Number(prompt("how many contacts do you want to add?"));
// let contactName;
// let contactPhone: number;
// for (let i = 0; i < contactCount; i++) {
//   contactName = prompt("enter the name:");
//   contactPhone = Number(prompt("enter the phone number:"));
//   let newContact = {
//     id: contacts.length + 1,
//     name: contactName,
//     phone: contactPhone
//   };
//   contacts.push(newContact);
// }
// console.log(contacts);
//---------------------------------------------

// ex 4:
// interface Find {
//   id: number;
//   name: string;
//   number: number;
// }
// let contacts: Find[] = [
//   { id: 1, name: "armaghan", number: 9309665106 },
//   { id: 2, name: "sara", number: 9124562123 },
//   { id: 3, name: "hadis", number: 9365469878 }
// ];

// let userInput = prompt("enter your name:");
// if (userInput) {
//   findContact(userInput);
// }

// function findContact(contactName: string) {
//   let mainContact: boolean = contacts.some((person) => {
//     return person.name === contactName;
//   });

//   if (mainContact) {
//     console.log("contact is available");
//   } else {
//     console.log("Sorry,contact is NOT available");
//   }
// }
