import axios from "axios";

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`/profile?userId=${userId}`);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const updateUserProfile = async (userData, token) => {
  try {
    const response = await axios.put(`/profile`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
