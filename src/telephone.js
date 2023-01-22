import getPhoneNumber from './tel_basic';

const phoneNumbers = ['8 (927) 000-00-00', '+7 960 000 00 00', '+86 000 000 0000'];

// eslint-disable-next-line no-console
phoneNumbers.forEach((phoneNumber) => console.log(`${phoneNumber}: ${getPhoneNumber(phoneNumber)}`));
