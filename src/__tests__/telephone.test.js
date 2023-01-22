import getPhoneNumber from '../tel_basic';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
])(
  ('return correct phone number'),
  (phoneNumber, expected) => {
    expect(getPhoneNumber(phoneNumber)).toBe(expected);
  },
);
