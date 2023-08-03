/**
 Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
**/

function removeSmallest(numbers) {
    //creating a new array so that the original isn't touched
    let newArray = numbers.map((x) => x) 
    //identifying the smallest value in the array
    let minNumber = Math.min(...newArray)
    //removes the smallest number in the array
    //the problem being it's supposed to only remove the first of the smallest numbers in the array
    let removeMinNum = newArray.filter(num => num != minNumber)
    return removeMinNum;
  }
  console.log(removeSmallest([1,2,3,4]))
 
  //THe solution below

  /**
 function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}  
**/