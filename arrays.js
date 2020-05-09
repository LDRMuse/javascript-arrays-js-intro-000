var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];


const array = [1];
let element = 'foo'
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function accessElementInArray(array, index) {
  return array[index];
}
/*  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })*/
