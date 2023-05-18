import { useState } from "react";
import InputField from "../Fields";
import ImageUpload from "../ImageUpload";
import { useDispatch } from "react-redux";
import { verifyUserAccount } from "../../redux/verification/verificationActions";
import { useSelector } from "react-redux";

const VerifyAccount = () => {
  const [nidOrPassportNumber, setNidOrPassportNumber] = useState("");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const { auth, profile } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      nidOrPassportNumber,
      documentImage: selectedImage,
    };

    await verifyUserAccount(payload, auth.user.accessToken)(dispatch);
    console.log("Payload", payload);
  };
  return (
    <>
      <div className="bg-white flex items-center h-16 px-3 pt-3 space-x-4 m-2 p-2 text-xl font-bold rounded-lg capitalize">
        Verify your account
      </div>
      <div className="bg-white m-2 p-4 rounded-lg">
        {["VERIFIED"].includes(profile.profile?.accountStatus) && (
          <p>
            You are Already <span className="text-blue-400">verified</span>
          </p>
        )}
        {["PENDING VERIFICATION"].includes(profile.profile?.accountStatus) && (
          <p>
            Your Verification is{" "}
            <span className="text-orange-400">in progress</span>. Please wait
            for the process to finish
          </p>
        )}
        {["UNVERIFIED"].includes(profile.profile?.accountStatus) && (
          <form
            onSubmit={handleSubmit}
            className="space-y-3 w-full px-5 max-w-lg"
          >
            <InputField
              label="National ID or Passport ID"
              name="nidOrPassportNumber"
              type="text"
              defaultValue={nidOrPassportNumber}
              setField={setNidOrPassportNumber}
            />

            <div className="container mx-auto my-8">
              <h1 className="text-2xl font-bold mb-4">Image Upload</h1>
              <ImageUpload
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            </div>

            <button
              type="submit"
              className="bg-green-400 px-4 py-2 rounded-lg border border-green-600 text-white hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default VerifyAccount;
