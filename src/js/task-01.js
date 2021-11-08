"use strict";

// Количество категорий
const countItems = document.querySelector("#categories").children.length;
console.log("Number of categories:", countItems);

// Категория Animals
const animals = document.querySelector("#categories").childNodes[1];

const category1 = animals.firstElementChild.textContent;
console.log("Category:", category1);

const elements1 = animals.childNodes[3].children.length;
console.log("Elements:", elements1);

// Категория Products
const products = document.querySelector("#categories").childNodes[3];

const category2 = products.childNodes[1].textContent;
console.log("Category:", category2);

const elements2 = products.childNodes[3].children.length;
console.log("Elements:", elements2);

// Категория Technologies
const technologies = document.querySelector("#categories").childNodes[5];

const category3 = products.childNodes[1].textContent;
console.log("Category:", category3);

const elements3 = products.childNodes[3].children.length;
console.log("Elements:", elements3);
