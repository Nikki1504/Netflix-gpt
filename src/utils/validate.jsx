export const checkValidData = (name, email, password) => {
  if (name !== null) {
    const isNameValid = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name.trim());
    if (!isNameValid) return "Please enter a valid name.";
  }
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Please enter valid Email";
  if (!isPasswordValid) return "Please enter valid Password.";

  return null;
};
