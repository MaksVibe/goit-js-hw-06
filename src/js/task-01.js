"use strict";

console.log(
  "Number of categories:",
  document.querySelector("#categories").children.length
);

const categories = document.querySelectorAll("#categories");
let categ = document.querySelectorAll(".item");

// first-, lastElementChild
for (const item of categ) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
}

/*
// childNodes
for (const item of categ) {
  console.log("Category:", item.childNodes[1].textContent);
  console.log("Elements:", item.childNodes[3].children.length);
}


Через обычный for
for (let item = 0; item < categ.length; item += 1) {
  console.log("Category:", categ[item].firstElementChild.textContent);
  console.log("Elements:", categ[item].childNodes[3].children.length);
}

Через for Each
categ.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.childNodes[3].children.length);
});
*/
