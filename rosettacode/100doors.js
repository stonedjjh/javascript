function getFinalOpenedDoors(numDoors) {  
    let doors = new Array(numDoors);  
    doors.fill("closed", 0, numDoors);  
    for (let i = 0; i < numDoors; i++) {    
      for (let j = i; j < numDoors ; j += i==0?1:(i+1)) {
        if (doors[j] === "closed") {
          doors[j] = "open";
        } else {
          doors[j] = "closed";
        }     
      }    
    }
    let openDoor = [];
    for (i=0; i<doors.length; i++){
      if(doors[i]==="open")
          openDoor.push(i+1);
    }  
    return openDoor;
  }
let frutas = getFinalOpenedDoors(100);
console.log(frutas);
console.log(typeof(frutas));
console.log(frutas.length);
console.log(frutas[0]);


function getFinalOpenedDoors2(numDoors) {
    let doors = [];
    let i = 1, ii = i*i;
  
    while (ii <= numDoors) {
      doors.push(ii);
      i++; ii = i*i;
    }
  
    return doors;
  }

  frutas = getFinalOpenedDoors2(100);
  console.log(frutas);
  console.log(typeof(frutas));
  console.log(frutas.length);
  console.log(frutas[0]);