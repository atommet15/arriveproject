import { formatPhoneNumber, formatWord, formatCurrency } from '../app/utils/utils'

test('formatPhoneNumber should properly format number', () => {
  const number = formatPhoneNumber(5555555555);
  expect(number).toBe('(555) 555-5555');
});

test('formatPhoneNumber should handle non integer inputs', () => {
  const number = formatPhoneNumber('5555555555');
  expect(number).toBe('(555) 555-5555');
});

test('formatPhoneNumber should handle non numeric charcters', () => {
  const number = formatPhoneNumber('555-555-5555');
  expect(number).toBe('(555) 555-5555');
});

test('formatPhoneNumber should return "" if there are not enough numeric characters', () => {
  const number = formatPhoneNumber(555555555);
  expect(number).toBe('');
});

test('formatWord should properly format word', () => {
  const word = formatWord('hello world');
  expect(word).toBe('Hello World');
});

test('formatWord should return "" if parameter is not a string', () => {
  const word = formatWord(123);
  expect(word).toBe('');
});

test('formatCurrency should properly format number', () => {
  const currency = formatCurrency(1090);
  expect(currency).toBe('$1,090');
});

test('formatPhoneNumber should handle non numeric charcters', () => {
  const number = formatCurrency(1090);
  expect(number).toBe('$1,090');
});
