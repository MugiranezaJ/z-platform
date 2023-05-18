import { getUserProfile, updateUserProfile } from "./profileApi";
import {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileFailure,
} from "./profileSlice";

export const fetchUserProfile = (userId) => async (dispatch) => {
  try {
    dispatch(fetchProfileStart());

    const userProfile = await getUserProfile(userId);

    dispatch(fetchProfileSuccess(userProfile));
  } catch (error) {
    dispatch(fetchProfileFailure(error.message));
  }
};

export const updateUserProfileAction =
  (userData, token) => async (dispatch) => {
    try {
      dispatch(fetchProfileStart());

      const userProfile = await updateUserProfile(userData, token);

      dispatch(fetchProfileSuccess(userProfile));
    } catch (error) {
      dispatch(fetchProfileFailure(error.message));
    }
  };
