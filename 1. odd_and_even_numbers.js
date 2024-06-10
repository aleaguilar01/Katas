
// You are given an array (which will have a length of
// at least 3, but could be very large) containing integers.
//The array is either entirely comprised of odd integers or entirely
//comprised of even integers except
//for a single integer N. Write a method that takes the array as an
//argument and returns this "outlier" N.

//[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

//[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)


// Returning: Returns the outlying integer

// Inputed: Array containing integers, either even integers or odd integers,
// except for a single integer

// Steps:
// create an empty array for even integers, and an empty array for odd integers
//loop through the array, for each index determine if its odd or even
// if odd add to odd array, if even add to even array
// if at end array.length = 1 return that integer
// returning the outlying integer

// Edge Cases: What if empty array, will the array ever not contain an outlier, will
// it always be an array, will the array always contain number types

const findOutlier = (integers)=> {
  //your code here
  const evens = [];
  const odds = [];

  for (let val of integers) {
    if (val % 2 === 0) {
      evens.push(val);
    } else {
      odds.push(val);
    }
    let evensLength = evens.length;
    let oddsLength = odds.length;
    if (evensLength > 0 && oddsLength > 0 && evensLength !== oddsLength) {
      if (evensLength === 1) {
        return evens[0];
      }
      return odds[0];
    }
  }

};


const createEven =  (range) => (Math.floor(Math.random() * range / 2) * 2);

const createScenario = (type, quantity) => {
  const range = Math.floor(Math.random() * 1000000);


  if (type === 'even') {
    const arr = Array.from({length: quantity}, () => createEven(range));
    arr.push(createEven(range) + 1);
    return arr;
  } else {
    const arr = Array.from({length: quantity}, () => createEven(range) + 1);
    arr.push(createEven(range));
    return arr;
  }

};

const processingOutlier = (quantity) => {
  const data = createScenario('even',quantity);
  const start = Date.now();
  console.log('starting');
  findOutlier(data);
  const processingTime = Date.now() - start;
  console.log(processingTime);
};

processingOutlier(4);
processingOutlier(4000);
processingOutlier(400000);
processingOutlier(40000000);
processingOutlier(40000001);
processingOutlier(40000002);
processingOutlier(40000003);
processingOutlier(40000004);
processingOutlier(40000005);
processingOutlier(50000005);



////////////////the most popular answers/////////////////////////

/*

function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}


function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}


function findOutlier(integers){
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
*/