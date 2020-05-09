var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];


const array = [1];
let element = 'foo'
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function accessElementInArray(array, index) {
  return index[3]
}
/*  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })*/