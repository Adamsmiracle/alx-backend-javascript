function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString.trim()));
  const cleanedValues = filteredValues.map((value) => value.substring(startString.length));

  return cleanedValues.join('-');
}

export default cleanSet;