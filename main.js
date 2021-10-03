//!---1---
const contectMessage = `{
    "name":"nadav",
    "message":"hello handsome ;)",
    "email": "theshiznet@gmail.com"
}`
let message = JSON.parse(contectMessage)
console.log(message);

//!---2---
const carsNdShips = `{
    "carsArr": [
        {"model":"mazeratti","price":100000,"year":2015},
        {"model":"lamnborghini","price":120000,"year":2012}
    ],
    "shipsArr": [
        {"name":"linda","year":1989,"docking":"haifa","pic":"https://cdn.pixabay.com/photo/2015/03/05/01/46/sailing-ship-659758_1280.jpg"},
        {"name":"suzi","year":1999,"docking":"tel-aviv","pic":"https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847_1280.jpg"}
    ]
}`

let carsNdShipsObj = JSON.parse(carsNdShips)
const div = document.getElementById("div");

// for (const element of carsNdShipsObj.shipsArr) {
//     div.innerHTML += `
//     <p>name: ${element.name}</p>
//     <p>year: ${element.year}</p>
//     <p>docking: ${element.docking}</p>
//     <img src="${element.pic}" style="width:250px;height:200px">
//     `
// }

//!---3---
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const mesInput = document.getElementById("mesInput");
const btn = document.getElementById("btn");
let object = {};

// btn.onclick = () => {
//     object = {
//         name: nameInput.value,
//         Email: emailInput.value,
//         Message: mesInput.value
//     }
//     console.log(object);
//     console.log(JSON.stringify(object));
// }

//!---4---
// function returnJson(obj) {
//     obj = {
//         name: nameInput.value,
//         Email: emailInput.value,
//         Message: mesInput.value
//     }
//     return console.log(JSON.stringify(obj)); 
// }

// btn.onclick = ()=>{returnJson(object)}

//!---5---
// function returnObject(strjson) {
//     strjson = `{
//         "name": "${nameInput.value}",
//         "Email": "${emailInput.value}",
//         "Message": "${mesInput.value}"
//     }`
//     return console.log(JSON.parse(strjson)); 
// }

// btn.onclick = ()=>{returnObject(object)}


//!---6---
const userAge = document.getElementById("userAge");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const btn1 = document.getElementById("btn1");
let userObj = {};

function returnTripleAge(object) {
    object = {
        age: userAge.value*3,
        name: userName.value,
        Email: userEmail.value
    }
    console.log(JSON.stringify(object));
}

btn1.onclick=()=>{returnTripleAge(userObj)}