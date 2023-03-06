// web storage APIs

// window.alert("Alert!");
// alert("Alert!");

const myObject = {
    name: "Nite",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
};

// const myHobbies = ["eat", "sleep", "code"];
// sessionStorage.setItem("myStore",JSON.stringify(myObject));
// const mySessData = JSON.parse(sessionStorage.getItem("myStore"));
// console.log(mySessData);

localStorage.setItem("myLocalStore",JSON.stringify(myObject));
// localStorage.removeItem("myLocalStore");
// localStorage.clear();
const key = localStorage.key(0);
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);
console.log(key);
console.log(storeLength);

