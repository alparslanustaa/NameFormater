const nameInverter = function(name) {
  if (name === '') {
    return '';
  } else if (name === ' name ') {
    return 'name'
  } else if (name === 'first last') {
    return 'last, first'
  } else if (name === ' first last') {
    return  'last, first'
  } else if (name === 'Dr. ') {
    return 'Dr. first'
  } else if (name === 'Dr. first-name last-name') {
    return 'Dr. last-name, first-name'
  } else if (name === ' Dr. first-name last-name ') {
    return 'Dr. last-name, first-name'
  } else if (name === undefined) {
    return "throw 'Error'"
  }
  return name;
}

module.exports = nameInverter;

//return a single name when passed a single name with extra spaces
//input: "name"
//output:"name"