let args = process.argv.splice(2)
let nums = [];
//Paring to numbers from strings
for (let num of args){
  let parseNum  = parseInt(num);
  if(parseNum >= 0){
   nums.push(parseNum)
  }
  else {
    continue;
  }
}

let maxVal = args[0];

//Get the maximum value
for(let num of nums){
  if (num > maxVal){
    maxVal = num;
  }
}


for (let t = 0; t <= maxVal * 1000; t = t + 1000) {
  
  setTimeout(() => {
    for (let v of nums) {
      if (v * 1000 === t) {
        //numbers here for testing. The beep might not be loud enough
        console.log(t);
        process.stdout.write('\x07');
      }
    }
  }, t);
 
}
