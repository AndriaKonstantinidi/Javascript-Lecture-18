// let emptyArray = [];

// function fillArray(quantity,array,min,max){
//     while(array.length != quantity){
//         let randNum = Math.round(Math.random()*(max - min)+ min);
//          if(randNum % 2 == 0){
//              array.push(randNum);
//          }
//         }
//         console.log(array)
//     }
// fillArray(10,emptyArray,10,20);

// let car = {
//     color:"black",
//     engine:5.0,
//     year:2022,
//     model:"mercedes",
//     getFullInfo(){
//         return `მანქანის ფერი არის ${car.color},ძრავი არის ${car.engine}, და გამოშვების წელია ${car.year}`
//     }
// }
// console.log(car);

// console.log(car.getFullInfo());
// car.color = "white";
// console.log(car)

// function getFullInfo(color,engine,year){
//     return `მანქანის ფერი არის ${color},ძრავი არის ${engine}, და გამოშვების წელია ${year}`
// }

// let info = getFullInfo("black","5.0",2022)
// console.log(info)

function getHumanObject(name,lastName,age,mail){
    return{
        name:name,
        lastName:lastName,
        age:age,
        mail:mail
    }
}
let humans = [
    getHumanObject("lewis","hamilton",37,"test@gmail.com"),
    getHumanObject("george","russel",22,"tdsadsadsat@gmail.com"),
    getHumanObject("carlos","sainz",28,"abc12@gmail.com"),
    getHumanObject("charles","leclerc",22,"adatdas@gmail.com")
]
// console.log(humans);

// for(let i = 0; i < humans.length; i++){
//     console.log(humans[i].name)
// }

humans.forEach(item => console.log(item.mail))