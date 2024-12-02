import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { MdCancel, MdEdit } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

function UserInformation({ profile }) {
  const [emptyField, setEmptyField] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const [userId, setUserId] = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [userInformation, setUserInformation] = useState({
    username: "",
    email: "",
    contact_no: "",
  });

  const validatePhoneNumber = (p) => {
    const patt = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return patt.test(p);
  };

  const validateEmail = (e) => {
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patt.test(e);
  };

  const handleUsernameInput = (e) => {
    console.log(userInformation);
    setUserInformation({ ...userInformation, username: e.target.value });
  };

  const handleEmailInput = (e) => {
    console.log(userInformation);
    setUserInformation({ ...userInformation, email: e.target.value });
  };

  const handleContactInput = (e) => {
    console.log(userInformation);
    setUserInformation({ ...userInformation, contact_no: e.target.value });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUserInformation({
      username: profile.username,
      email: profile.email,
      contact_no: profile.contact_no,
    });
    setInvalidEmail(false);
    setInvalidPhone(false);
    setEmptyField(false);
  };

  const handleEditMode = () => {
    setIsEditing(true);
    setSuccessful(false);
    setUserInformation({
      username: profile.username,
      email: profile.email,
      contact_no: profile.contact_no,
    });
  };

  const handleSubmit = () => {
    setEmptyField(false);
    setInvalidEmail(false);
    if (
      userInformation.username == "" ||
      userInformation.username == undefined ||
      userInformation.username == null
    ) {
      setEmptyField(true);
      return;
    }
    if (
      userInformation.email == "" ||
      userInformation.email == undefined ||
      userInformation.email == null
    ) {
      setEmptyField(true);
      return;
    }
    if (
      userInformation.contact_no == "" ||
      userInformation.contact_no == undefined ||
      userInformation.contact_no == null
    ) {
      setEmptyField(true);
      return;
    }

    if (!validateEmail(userInformation.email)) {
      setInvalidEmail(true);
      return;
    }

    if (!validatePhoneNumber(userInformation.contact_no)) {
      setInvalidPhone(true);
      return;
    }

    axios
      .put(`http://localhost:3000/api/user/${userId}/`, userInformation)
      .then((res) => {
        console.log(userInformation);
        console.log(res.data);
        setIsEditing(false);
        setSuccessful(true);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
      });
  };

  const showErrorMessage = () => {
    const errorStyling =
      "mt-4 mb-4 p-2 w-full rounded flex flex-row gap-2 grow-0 basis-0 justify-center items-center bg-red-100 text-red-500 text-center text-wrap";
    if (invalidEmail) {
      return (
        <div className={`${errorStyling}`}>
          The email you entered is invalid
        </div>
      );
    }
    if (invalidPhone) {
      return (
        <div className={`${errorStyling}`}>
          The phone number you entered is invalid
        </div>
      );
    }
    if (emptyField) {
      return (
        <div className={`${errorStyling}`}>
          You have one or more empty fields
        </div>
      );
    }
    return "";
  };

  const showSuccess = () => {
    if (successful) {
      return (
        <div className="p-2 my-4 roudned flex flex-row gap-2 justify-center items-center text-center bg-green-100 text-green-500 mt-4 font-thin">
          User Information succesfully changed. User Information will be updated
          soon.
        </div>
      );
    }
    return "";
  };

  const showEditForm = () => {
    if (isEditing) {
      let inputStyling = "p-2 mt-2 mb-4 rounded border-2 border-slate-300";
      return (
        <div className="flex flex-col">
          <h2 className="font-bold">Edit User Information</h2>
          <hr className="my-4" />
          <div className="flex flex-col mx-8">
            {showErrorMessage()}
            <label htmlFor="">Username</label>
            <input
              type="text"
              value={userInformation.username}
              placeholder={profile.username}
              className={inputStyling}
              onChange={(e) => handleUsernameInput(e)}
            />

            <label htmlFor="" className="mt-2">
              Email
            </label>
            <input
              type="text"
              value={userInformation.email}
              placeholder={profile.email}
              className={inputStyling}
              onChange={(e) => handleEmailInput(e)}
            />

            <label htmlFor="" className="mt-2">
              Contact No.
            </label>
            <input
              type="text"
              value={userInformation.contact_no}
              placeholder={profile.contact_no}
              className={inputStyling}
              onChange={(e) => handleContactInput(e)}
            />
          </div>
          <div className="mt-8 flex flex-row grow gap-2 justify-end items-center">
            <button
              className="py-[0.3rem] pr-2 pl-2 rounded font-bold text-red-500 bg-white flex flex-row justify-center items-center gap-2 border-3 border-red-200 hover:bg-red-100 hover:border-red-300 active:bg-red-300 active:border-red-400 active:text-red-900 transition-colors"
              onClick={() => handleCancel()}
            >
              <MdCancel className="text-md" />
              Cancel
            </button>
            <button
              className="px-3 py-2 rounded flex flex-row justify-center items-center gap-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-colors"
              onClick={() => handleSubmit()}
            >
              <FaEdit />
              Save Changes
            </button>
          </div>
        </div>
      );
    }
    if (!isEditing) {
      return (
        <div>
          <div className="flex flex-row">
            <h2 className="font-bold">User Information</h2>
            <button
              className="ml-auto px-3 py-2 rounded flex flex-row justify-center items-center gap-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-colors"
              onClick={() => handleEditMode()}
            >
              <MdEdit />
              Edit
            </button>
          </div>
          <hr className="my-4" />
          {showSuccess()}
          <div className="flex flex-row">
            <div>
              <label className="text-md text-gray-500 font-semibold">
                Username
              </label>
              <p className="text-lg mb-4">{profile.username}</p>

              <label className="text-md text-gray-500 font-semibold">
                Email
              </label>
              <p className="text-lg mb-4">{profile.email}</p>

              <label className="text-md text-gray-500 font-semibold">
                Contact No.
              </label>
              <p className="text-lg mb-4">{profile.contact_no}</p>

              <label className="text-md text-gray-500 font-semibold">
                Registration Date
              </label>
              <p className="text-lg mb-4">
                {new Date(profile.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-4 grow rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
      {showEditForm()}
    </div>
  );
}

export default UserInformation;
