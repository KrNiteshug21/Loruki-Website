// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

//synatx:addEventListener(event,function,usecapture)

// const doSomething = function(){
//     alert("Doing something");
// }

// h2.addEventListener("click",doSomething,false);
// h2.removeEventListener("click",doSomething,false);

// h2.addEventListener("click",(event) => {
//     console.log(event.target);
//     event.target.textContent = "Clicked";
// })

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState : complete");
    initApp();
  }
});

// const initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");

//   view.addEventListener("click",(event) => {
//     // event.target.style.backgroundColor = "purple";
//     view.classList.toggle("purple");
//     view.classList.toggle("darkblue");
//   });
  
//   div.addEventListener("click",(event) => {
//     // event.target.style.backgroundColor = "blue";
//     div.classList.toggle("blue");
//     div.classList.toggle("black");
//   });
  
//   h2.addEventListener("click",(event) => {
//     // event.target.textContent = "clicked";
//     const myText = event.target.textContent;
//     myText === "My 2nd View"
//     ? (event.target.textContent = "Clicked")
//     : (event.target.textContent = "My 2ndView");
//   });

//   const nav = document.querySelector("nav");
//   nav.addEventListener("mouseover", (event) =>{
//     event.target.classList.add("height100");
//   });
//   nav.addEventListener("mouseout", (event) => {
//     event.target.classList.remove("height100");
//   })
// };

const initApp = () => {
  const view2 = document.querySelector("#view2");
  view2.style.display = "none";
  const view3 = document.querySelector("#view3");
  view3.style.display = "flex";
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  })
};