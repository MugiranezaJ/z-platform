import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../Fields";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { login } from '../actions/authActions';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sendLoginLink, setSendLoginLink] = useState(false);
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifyA = () => toast(auth.error, { containerId: "A" });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));

    console.log("Payload", { email, password, sendLoginLink });

    // Reset form fields
    setEmail("");
    setPassword("");
    setSendLoginLink(false);
  };

  useEffect(() => {
    if (auth.isLoggedIn) navigate("/profile");
  }, [auth.isLoggedIn, navigate]);

  useEffect(() => {
    if (auth.error) {
      notifyA();
    }
  }, [auth.error]);

  return (
    <div className="flex h-full min-h-[calc(100vh-120px)]">
      <ToastContainer
        enableMultiContainer
        containerId={"A"}
        position={toast.POSITION.TOP_RIGHT}
      />
      <div className="grid grid-cols-2 min-h-[500px] mx-auto my-auto w-[800px] bg-white rounded-lg border overflow-clip">
        <div className="flex flex-col justify-center items-center bg-blue-500 text-white font-thin">
          <h2 className="text-4xl">Login</h2>
          <p>Better days ahead!</p>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="space-y-3 w-full px-5">
            <InputField
              label="Email"
              name="email"
              type="email"
              setField={setEmail}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              setField={setPassword}
            />
            <span className="flex items-center space-x-2 font-thin text-sm">
              <input
                type="checkbox"
                name="sendLoginLink"
                onChange={(e) => setSendLoginLink(e.target.checked)}
              />
              <p>Send login link</p>
            </span>
            <p>
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-blue-600">
                Register
              </Link>
            </p>
            <button
              type="submit"
              className="bg-blue-300 px-4 py-2 rounded-lg  border border-blue-600 text-white hover:bg-blue-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
