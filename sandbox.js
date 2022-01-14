/*let radius = prompt('Radius of the circle:');

const calcArea = function(radius){ 
return 3.14 * radius**2; 
}

let result = calcArea(radius); 

alert(`The surface is: ${result}`);
*/


numberOfDices = prompt("Number of D10:   ")

function roll(){
    let outcome = Math.floor(Math.random()*10)+1;
    console.log(outcome);
    document.writeln(outcome, " ");
  }



for (let i = numberOfDices; i--;){
  roll(i);
}





























// const logPerson = (person, index) =>{
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);