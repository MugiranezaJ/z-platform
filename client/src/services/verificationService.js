import axios from "axios";

export const submitVerificationData = async (verificationData) => {
  try {
    await axios.post("/api/verification", verificationData);
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const fetchVerificationStatus = async () => {
  try {
    const response = await axios.get("/api/verification");

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
