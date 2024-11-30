import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { FaUser } from "react-icons/fa";

import ChangePassword from "../components/ChangePassword";
import Logout from "../components/Logout";
import Delete from "../components/Delete";
import ProfilePicture from "../components/ProfilePicture";
import UserInformation from "../components/UserInformation";

import axios from "axios";
import "../styles/Profile.css";

function Profile() {
  const [userId, setUserId] = useContext(UserContext);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }

    axios
      .get(`http://localhost:3000/api/user/${userId}/non_sensitive`)
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  }, []);

  return (
    <div className="profile-container lg:mx-64 md:mx-16">
      <h1 className="mt-6 mb-6 text-3xl drop-shadow-lg font-bold tracking-wider flex flex-row gap-4 justify-center items-center">
        <FaUser />
        PROFILE
      </h1>
      <div className="profile-header">
        <ProfilePicture />
        <UserInformation profile={profile} />
      </div>
      <Logout />
      <ChangePassword />
      <Delete />
    </div>
  );
}

export default Profile;
