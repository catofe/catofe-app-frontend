import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { FaUser } from "react-icons/fa";

import ChangePasswordForm from "../components/ChangePasswordForm";
import DeleteAccountForm from "../components/DeleteAccountForm";
import Logout from "../components/Logout";

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
    <div className="profile-container">
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
      <div className="profile-card profile-logout-account">
        <p>
          <b>Log Out</b>
          <Logout />
        </p>
      </div>
      <div className="profile-card profile-delete-account">
        <p>
          <b>Delete Account</b>
          <DeleteAccountForm />
        </p>
      </div>
      <div className="profile-card profile-change-password">
        <p>
          <b>Change Password</b>
        </p>
        <ChangePasswordForm />
      </div>
    </div>
  );
}

export default Profile;
