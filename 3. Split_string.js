const splitString = (str) => {
  results = [];

  arr = str.split("");

  if (arr.length % 2 !== 0) {
    arr.push("_");
  }

  let index = 0;

  while (index < arr.length ) {
    tempstr = "";
    tempstr += `${arr[index]}${arr [index+1]}`;
    index += 2;
    results.push(tempstr);
  }

  return results;
}

splitString("123")
splitString("1234")


//most common solutions

function solution(s){
  return (s+"_").match(/.{2}/g)||[]
}

function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}

// Convert string into array
// split the array