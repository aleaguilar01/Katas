//Create a function that returns the sum of the two
//lowest positive numbers given an array of minimum 4 positive integers.
//No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455.

//inputs: arra of integers, positive. Only integer
//return sum of two samllest numbers.

// not in order.



const sumTwoSmallestNumbers = (numbers) => {

  let smallestnumber = Infinity;
  let smallernumber2 = Infinity;

  for (let val of numbers) {
    if (val < smallestnumber) {
      smallestnumber = val;
    }
  }
  console.log(smallestnumber);

  for (let val of numbers) {
    if (val > smallestnumber && val < smallernumber2) {
      smallernumber2 = val;
    }
  }
  console.log(smallernumber2);

  return smallestnumber + smallernumber2;

};

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);

