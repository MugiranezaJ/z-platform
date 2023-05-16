// Validate email format
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validate password strength
  export const validatePassword = (password) => {
    // Add your password strength validation logic here
    // For example, you can check for a minimum length or specific character requirements
    // Return true if the password is valid, false otherwise
    return true;
  };
  
  // Validate date of birth
  export const validateDateOfBirth = (dateOfBirth) => {
    const currentDate = new Date();
    const userDateOfBirth = new Date(dateOfBirth);
    return userDateOfBirth < currentDate;
  };
  