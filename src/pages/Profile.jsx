import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";

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
    <div>
      <h1>This is the Profile Page</h1>
      <h2>{profile.username}</h2>
      <p>{profile.email}</p>
      <p>{profile.contact_no}</p>
      <p>{profile.createdAt}</p>
    </div>
  );
}

export default Profile;
