// formatWord - takes in a string and capitalizes each word in the string and returns it.
export const formatWord = (word) => {
  return word.replace(/\b\w/g, w => w.toUpperCase());
}

// formatPhoneNumber - takes in a number and produces a string with a (xxx) xxx-xxxx format
export const formatPhoneNumber = (phoneNumber) => {
  let n = phoneNumber.toString().match(/^(\d{3})(\d{3})(\d{4})$/);
  return `(${n[1]}) ${n[2]}-${n[3]}`;
}

// formatCurrency - takes in a number and produces a string with the format $0,000
export const formatCurrency = (number) => {
  return '$' + number.toLocaleString();
}
