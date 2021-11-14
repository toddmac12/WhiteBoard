/* eslint-disable no-undef */
import uniqString from '../question4';

describe('uniqString', () => {

  test('should return false if the string is not unique', () => {
    expect(uniqString('hello')).toBe(false);

    const input = "hello";
    const output = false;

    const result = uniqString(input);

    expect(result).toBe(output);
  });

  test('should return true if the string is unique', () => {
    expect(uniqString('copywright')).toBe(true);

    const input = "copywright";
    const output = true;

    const result = uniqString(input);

    expect(result).toBe(output);
  });

});
