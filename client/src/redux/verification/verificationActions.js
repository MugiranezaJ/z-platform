import { verifyAccount } from "./vericationApi";
import {
  verifyAccountStart,
  verifyAccountSuccess,
  verifyAccountFailure,
} from "./verificationSlice";

export const verifyUserAccount =
  (verificationData, token) => async (dispatch) => {
    try {
      dispatch(verifyAccountStart());

      await verifyAccount(verificationData, token);

      dispatch(verifyAccountSuccess());
    } catch (error) {
      dispatch(verifyAccountFailure(error.message));
    }
  };
