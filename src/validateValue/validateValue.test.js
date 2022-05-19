const validateValue = require('./validateValue');

test('Validate Value', () => {
  expect(validateValue(50)).toBe(true);
})

describe('validateValue', () => {
  test('Valid Value', () => {
    expect(validateValue(50)).toBe(true);
  });
  test('Invalid Value LC', () => {
    expect(validateValue(-1)).toBe(false);
  });
  test('Invalid Value RC', () => {
    expect(validateValue(101)).toBe(false);
  });
  test('Valid Value LC', () => {
    expect(validateValue(0)).toBe(false);
  });
  test('Valid Value RC', () => {
    expect(validateValue(100)).toBe(true);
  });
});

//npm run test testFileName.js
