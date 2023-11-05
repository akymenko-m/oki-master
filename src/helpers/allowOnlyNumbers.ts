const allowOnlyNumbers = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const pattern = /^[0-9]+$/;
  if (!pattern.test(event.key)) {
    event.preventDefault();
  }
};
export default allowOnlyNumbers;
