function generateUniqueOrderNumber() {
  const timestamp = Date.now().toString();

  // Generate a random number and pad it with zeros if necessary
  const randomNum = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');

  const uniqueNumber = timestamp + randomNum;

  if (uniqueNumber.length > 10) {
    return uniqueNumber.slice(0, 10);
  }

  if (uniqueNumber.length < 10) {
    // If the Number is shorter than 10 characters, pad it with random numbers
    const remainingLength = 10 - uniqueNumber.length;
    return (
      uniqueNumber +
      Math.floor(Math.random() * 10 ** remainingLength)
        .toString()
        .padStart(remainingLength, '0')
    );
  }

  return uniqueNumber;
}

export default generateUniqueOrderNumber;
