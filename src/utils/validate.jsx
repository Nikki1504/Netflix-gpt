export const checkValidData = (name, email, password) => {
  const isNameValid = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name.trim());
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Please enter a valid name.";
  if (!isEmailValid) return "Please enter valid Email";
  if (!isPasswordValid) return "Please enter valid Password.";

  return null;
};

// "Your password must contain between 4 and 60 characters."
