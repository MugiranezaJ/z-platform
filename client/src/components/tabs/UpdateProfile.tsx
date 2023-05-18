import { useState } from "react";
import InputField from "../Fields";
import SelectField from "../SelectField";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUserProfileAction } from "../../redux/profile/profileActions";

const UpdateProfile = () => {
  const { profile, auth } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(profile.profile?.firstName);
  const [lastName, setLastName] = useState(profile.profile?.lastName);
  const [email, setEmail] = useState(profile.profile?.email);
  // const [password, setPassword] = useState("");
  const [gender, setGender] = useState(profile.profile?.gender);
  const [dateOfBirth, setDateOfBirth] = useState(
    profile.profile?.dateOfBirth?.split("T")[0]
  );
  const [maritalStatus, setMaritalStatus] = useState(
    profile.profile?.maritalStatus
  );
  const [nationality, setNationality] = useState(profile.profile?.nationality);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const payload = {
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth,
      maritalStatus,
      nationality,
    };
    console.log("Payload", payload);

    // Dispatch signup action
    updateUserProfileAction(payload, auth.user?.accessToken)(dispatch);

    // Reset form fields
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPassword("");
  };
  return (
    <>
      <div className="bg-white flex items-center h-16 px-3 pt-3 space-x-4 m-2 p-2 text-xl font-bold rounded-lg capitalize">
        Update profile
      </div>
      <div className="bg-white m-2 p-2 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="space-y-3 w-full px-5 max-w-lg"
          // defaultValue={initialValues}
        >
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            defaultValue={firstName}
            setField={setFirstName}
          />
          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            defaultValue={lastName}
            setField={setLastName}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            defaultValue={email}
            setField={setEmail}
          />
          <SelectField
            label="Gender"
            name="gender"
            value={gender}
            options={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
            setField={setGender}
          />
          <InputField
            label="Date Of Birth"
            name="dateOfBirth"
            type="text"
            defaultValue={dateOfBirth}
            setField={setDateOfBirth}
          />
          <SelectField
            label="Marital Status"
            name="maritalStatus"
            value={maritalStatus}
            options={[
              { label: "Single", value: "SINGLE" },
              { label: "Married", value: "MARRIED" },
              { label: "Divorced", value: "DIVORCED" },
              { label: "Widowed", value: "WIDOWED" },
            ]}
            setField={setMaritalStatus}
          />
          <InputField
            label="Nationality"
            name="nationality"
            type="text"
            defaultValue={nationality}
            setField={setNationality}
          />

          <button
            type="submit"
            className="bg-green-400 px-4 py-2 rounded-lg border border-green-600 text-white hover:bg-green-600"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
