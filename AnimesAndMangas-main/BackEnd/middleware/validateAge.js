const validateAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  const birthYearDate = new Date(birthYear);
  const age = currentYear - birthYearDate.getFullYear();
  return age >= 18;
};

const ageValidation = (req, res, next) => {
  const birthYear = req.body.birthYear || req.body.birthYear;

  if (!validateAge(birthYear)) {
    return next(new Error("User must be at least 18 years old to register."));
  }

  next();
};

module.exports = ageValidation;
