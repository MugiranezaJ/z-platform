import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import InputField from "../Fields";
import { validatePassword } from "../../services/authService";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handlePasswordBlur = () => {
    try {
      if (!validatePassword(password)) {
        setError("Password does not meet the requirements");
      } else {
        setError("");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch signup action
    dispatch(signup({ firstName, lastName, email, password }));

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (auth.isLoggedIn) navigate("/profile");
  }, [auth.isLoggedIn, navigate]);

  return (
    <div className="flex h-full min-h-[calc(100vh-120px)]">
      <div className="grid grid-cols-2 min-h-[500px] mx-auto my-auto w-[800px] bg-white rounded-lg border overflow-clip">
        <div className="flex flex-col justify-center items-center bg-blue-500 text-white font-thin">
          <h2 className="text-4xl">Register</h2>
          <p>Better days ahead!</p>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="space-y-3 w-full px-5">
            <InputField
              label="First Name"
              name="firstName"
              type="text"
              value={firstName}
              setField={setFirstName}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={email}
              setField={setEmail}
            />
            <InputField
              label="Email"
              name="lastName"
              type="text"
              value={lastName}
              setField={setLastName}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={password}
              setField={setPassword}
              handleBlur={handlePasswordBlur}
            />
            {error && <div className="text-red-500">{error}</div>}
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-600">
                Login
              </Link>
            </p>

            <button
              type="submit"
              className={`${
                error ? "bg-gray-300" : "bg-blue-400"
              } px-4 py-2 rounded-lg border border-blue-600 text-white ${
                error ? "" : "hover:bg-blue-400"
              }`}
              disabled={error ? true : false}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
