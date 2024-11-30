import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { FaUser } from "react-icons/fa";

import ChangePasswordForm from "../components/ChangePasswordForm";
import ChangePassword from "../components/ChangePassword";
import Logout from "../components/Logout";
import Delete from "../components/Delete";

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
        <div className="profile-picture">
          <div className="profile-icon-background">
            <FaUser className="profile-icon" />
          </div>
        </div>
        <div className="user-info">
          <h2>
            <b>{profile.username}</b>
          </h2>
          <p>{profile.email}</p>
          <p>{profile.contact_no}</p>
          <p>{profile.createdAt}</p>
        </div>
      </div>
      <Logout />
      <ChangePassword />
      <Delete />
    </div>
  );
}

export default Profile;
