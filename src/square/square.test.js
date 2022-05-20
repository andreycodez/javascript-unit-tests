const square = require('./square');

describe('Square', () => {
  let mockValue;
  // beforeEach will be called before every test, f.i. add something to the database
  beforeEach(() => {
  })
  //beforeAll will be called once before all the tests
  beforeAll(() => {
  })
  test('Valid Value', () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(5);
    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math,'pow');
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })
  test('Valid Value', () => {
    const spyMathPow = jest.spyOn(Math,'pow');
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })

  // after each is called after each test, like clean the db records we added for the test
  afterEach(() => {
    //jest.clearAllMocks();
  })
  afterAll(() => {})
})
