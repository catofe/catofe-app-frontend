import React from "react";
import { FaUser } from "react-icons/fa6";

function ProfilePicture() {
  return (
    <div className="p-8 mr-8 flex flex-row justify-center items-center rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div className="profile-icon-background">
        <FaUser className="profile-icon" />
      </div>
    </div>
  );
}

export default ProfilePicture;
