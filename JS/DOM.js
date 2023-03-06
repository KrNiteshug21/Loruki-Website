const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
// view1.style.display = "none";
// view2.style.display = "flex";

const view = document.getElementsByClassName("view");
console.log(view);
const sameViews = document.querySelectorAll('.view');
console.log(sameViews); 

// const divs = view1.querySelectorAll("div");
// console.log("divs");
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const even = (document.getElementById("view1")).querySelectorAll("div:nth-of-type(2n");