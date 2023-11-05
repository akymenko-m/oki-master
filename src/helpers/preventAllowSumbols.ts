const preventAllowSumbols = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const specialCharacters = [
    '-',
    '+',
    '%',
    '*',
    '/',
    '=',
    '(',
    ')',
    '&',
    '?',
    '_',
  ];
  if (specialCharacters.includes(event.key)) {
    event.preventDefault();
  }
};

export default preventAllowSumbols;
