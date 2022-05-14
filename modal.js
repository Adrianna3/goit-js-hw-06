//Number of categories: 3
const menuItemsByClass = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${menuItemsByClass}`);

// Category: Animals
// Elements: 4
const menuItemsByH2 = document.querySelectorAll("h2");

console.log(`Category: ${menuItemsByH2[0].textContent}`);
const body = document.body;
const firstElement = body.firstElementChild;
const animals = firstElement.firstElementChild;
const animalsElemnts = animals.querySelectorAll("li").length;
console.log(`Elements: ${animalsElemnts}`);

// Category: Products;
// Elements: 3;
console.log(`Category: ${menuItemsByH2[1].textContent}`);
const products = firstElement.querySelectorAll("ul")[1];
const productsElemnts = products.querySelectorAll("li").length;
console.log(`Elements: ${productsElemnts}`);

// Category: Technologies;
// Elements: 5;
console.log(`Category: ${menuItemsByH2[2].textContent}`);
const technologies = firstElement.lastElementChild;
const technologiesElemnts = technologies.querySelectorAll("li").length;
console.log(`Elements: ${technologiesElemnts}`);