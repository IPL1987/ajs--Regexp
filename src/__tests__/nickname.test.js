import Validator from '../nickname';

test('standard username', () => {
  const username = 'netology';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('uppercase', () => {
  const username = 'NETOLOGY';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('camelcase', () => {
  const username = 'NetoLogy';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('wave case', () => {
  const username = 'NeToLoGy';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('first capital letter', () => {
  const username = 'Netology';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('last capital letter', () => {
  const username = 'netologY';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('with numbers', () => {
  const username = 'Netology1987';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('with dash', () => {
  const username = 'Neto-Logy';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('with underscore', () => {
  const username = 'Neto_Logy';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('numbers starting', () => {
  const username = '1987Netology';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('numbers ending', () => {
  const username = 'Netology1987';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('numbers in a row', () => {
  const username = 'Neto1987logy';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('dash at start', () => {
  const username = '-Netology';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('dash ending', () => {
  const username = 'Netology-';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('underscore starting', () => {
  const username = '_Netology';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('underscore ending', () => {
  const username = 'Netology_';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('cyrillic', () => {
  const username = 'Нетология';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('other symbols', () => {
  const username = '"№;%:?*%"';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});
