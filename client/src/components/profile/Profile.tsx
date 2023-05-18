import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../../redux/profile/profileActions";
import Tabs from "../Tabs";
import UpdateProfile from "../tabs/UpdateProfile";
import VerifyAccount from "../tabs/VerifyAccount";
import { GoUnverified, GoVerified } from "react-icons/go";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { calculateAge } from "../../services/profileService";

function Profile() {
  const { auth, profile } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user profile when the component mounts
    if (auth.user.userId) {
      fetchUserProfile(auth.user.userId)(dispatch);
    }
  }, [auth.user.userId, dispatch]);

  return (
    <div className="flex h-[calc(100vh-110px)]">
      <div className="flex flex-col items-center w-80 p-2 bg-white border-r shadow !h-full space-y-10 divide-y-2">
        <div>
          <div className="relative">
            <div className="h-64 bg-white border  rounded-lg mt-4">
              <img
                src="https://nshcs.hee.nhs.uk/wp-content/themes/nshcs-theme/images/blank__team.png"
                alt="user"
                className="w-full h-full"
              />
            </div>
            <div className="absolute bottom-2 right-2">
              {["UNVERIFIED"].includes(profile.profile?.accountStatus) && (
                <AiOutlineInfoCircle size={25} className="text-orange-400" />
              )}
              {["PENDING VERIFICATION"].includes(
                profile.profile?.accountStatus
              ) && <GoUnverified size={25} className="text-green-400" />}
              {["VERIFIED"].includes(profile.profile?.accountStatus) && (
                <GoVerified size={25} className="text-blue-600" />
              )}
            </div>
          </div>
          <div className="text-center">
            {profile.profile?.firstName && (
              <p className="font-semibold capitalize text-xl">
                {`${profile.profile?.firstName} ${profile.profile?.lastName}`}
              </p>
            )}
            {profile.profile?.dateOfBirth && (
              <p className="text-sm font-thin">{`${profile.profile?.gender}, ${
                calculateAge(profile.profile?.dateOfBirth) || "-"
              } years old`}</p>
            )}
          </div>
        </div>

        <div className="w-3/4 text-left">
          <p className="flex justify-between items-center capitalize text-gray-600">
            <span className="text-2xl">status</span>{" "}
            {profile.profile?.maritalStatus}
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <Tabs
          updateInfoComponent={<UpdateProfile />}
          verifyAccountComponent={<VerifyAccount />}
        />
      </div>
    </div>
  );
}

export default Profile;
