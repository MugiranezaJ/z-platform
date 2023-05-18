import axios from "axios";

export const verifyAccount = async (verificationData, token) => {
  try {
    const response = await axios.post("/verification", verificationData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
