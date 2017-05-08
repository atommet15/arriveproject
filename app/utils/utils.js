// formatWord - takes in a string and capitalizes each word in the string and returns it.
export const formatWord = (word) => {
  if(typeof word === 'string')
    return word.replace(/\b\w/g, w => w.toUpperCase());
  else
    return '';

}

// formatPhoneNumber - takes in a number and produces a string with a (xxx) xxx-xxxx format
export const formatPhoneNumber = (phoneNumber) => {
  // remove all non numeric characters
  let clean = phoneNumber.toString().replace(/\D/g, '');

  // grab all the "segments" of the phone number
  let n = clean.match(/^(\d{3})(\d{3})(\d{4})$/);

  // concatenate the "segments" into the proper format. return '' if there is no match
  return n ? `(${n[1]}) ${n[2]}-${n[3]}` : '';
}

// formatCurrency - takes in a number and produces a string with the format $0,000
export const formatCurrency = (number) => {
  // remove all non numeric characters
  if(parseInt(number)){
    return '$' + number.toLocaleString();
  }
  else{
    return '';
  }

}
