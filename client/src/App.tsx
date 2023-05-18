import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ResetPassword from "./components/auth/ResetPassword";
import Profile from "./components/profile/Profile";
// import Verification from './components/verification/Verification';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <Header />

      <main className="flex-grow overflow-hidden">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="" element={<Profile />} />
          </Route>
          {/* <PrivateRoute exact path="/verification" component={<Verification/>} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
