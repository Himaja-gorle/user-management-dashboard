export function validateUser(user) {
  const errors = {};

  if (!user.name.trim()) {
    errors.name = "Name is required";
  }

  if (!user.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!user.company.trim()) {
    errors.company = "Company is required";
  }

  if (!user.city.trim()) {
    errors.city = "City is required";
  }

  return errors;
}