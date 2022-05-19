const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
  test('Numbers Only Array', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    //toEqual check if the instance contents are equal, while toBe check that the instances are the same
  });
  test('Mess Value Array', () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, 'asdgf'])).toEqual(['1', '2', '3']);
    //toEqual check if the instance contents are equal, while toBe check that the instances are the same
  });
  test('Empty Value Array', () => {
    expect(mapArrToStrings([])).toEqual([]);
    //toEqual check if the instance contents are equal, while toBe check that the instances are the same
  });
  test('Negation Values Array', () => {
    expect(mapArrToStrings([1 ,2 , 3])).not.toEqual(['1', '2', '3', '4']);
    //toEqual check if the instance contents are equal, while toBe check that the instances are the same
  });
});

//npm run test testFileName.js
