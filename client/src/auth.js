import jwtDecode from "jwt-decode";

// Function to save access token to local storage
export const saveAccessToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

// Function to remove access token from local storage
export const removeAccessToken = () => {
  localStorage.removeItem("accessToken");
};

// Function to check if a user is authenticated
export const isAuthenticated = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    const decodedToken = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decodedToken.exp > currentTime;
  }

  return false;
};

// Function to get the authenticated user's ID
export const getAuthenticatedUserId = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    const decodedToken = jwtDecode(accessToken);
    return decodedToken.userId;
  }

  return null;
};
