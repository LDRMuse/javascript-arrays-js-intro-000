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
/*  describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
  it('adds an element to the beginning of an array', () => {
    expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
  })

  it('alters the original array', () => {
    const array = [1]

    destructivelyAddElementToBeginningOfArray(array, 'foo')

    expect(array).to.eql(['foo', 1])
  })
    })*/
