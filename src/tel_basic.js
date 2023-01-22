export default function getPhoneNumber(phoneNumberParam) {
  let phoneNumber = phoneNumberParam;
  phoneNumber = phoneNumber.replace(/[\s|-]/g, ''); // Убираем пробелы и тире
  phoneNumber = phoneNumber.replace(/^8\((\d{3})\)/g, '+7$1'); // Форматируем в международный формат
  return phoneNumber;
}
