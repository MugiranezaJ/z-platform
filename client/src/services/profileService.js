import axios from "axios";

export const fetchUserProfile = async () => {
  try {
    const response = await axios.get("/api/profile");

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const updateProfile = async (profileData) => {
  try {
    await axios.put("/api/profile", profileData);
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const uploadProfilePhoto = async (photoData) => {
  try {
    await axios.post("/api/profile/photo", photoData);
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const calculateAge = (dateOfBirth) => {
  const currentDate = new Date();
  const dob = new Date(dateOfBirth);

  // Calculate the difference in milliseconds between the current date and the date of birth
  const ageInMilliseconds = currentDate - dob;

  // Convert the age from milliseconds to years
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  // Round down the age to the nearest integer
  const roundedAge = Math.floor(ageInYears);

  return roundedAge;
};
