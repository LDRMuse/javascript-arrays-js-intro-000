var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];


const array = [1];
let element = 'foo'
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function addElementToEndOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}


function accessElementInArray(array, index) {
  return array[index];
}
