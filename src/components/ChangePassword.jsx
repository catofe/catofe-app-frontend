import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { MdCancel, MdEdit } from "react-icons/md";
import axios from "axios";

function ChangePassword() {
  const [isEditing, setIsEditing] = useState(true);
  const [userId, setUserId] = useContext(UserContext);
  const [password, setPassword] = useState({
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  });

  const handleShowForm = () => {
    setIsChanging(true);
  };

  const handleCurrentPasswordInput = (e) => {
    setPassword({
      ...password,
      current_password: e.target.value,
    });
  };

  const handleNewPasswordInput = (e) => {
    setPassword({
      ...password,
      new_password: e.target.value,
    });
  };

  const handleConfirmNewPasswordInput = (e) => {
    setPassword({
      ...password,
      confirm_new_password: e.target.value,
    });
    console.log(password);
  };

  const handleSubmitForm = () => {
    if (password.new_password != password.confirm_new_password) {
      console.log("Confirmation Failed");
      setIsEditing(false);
      return;
    }

    axios
      .put(
        `http://localhost:3000/api/user/${userId}/change_password/${password.current_password}/${password.new_password}`,
      )
      .then((res) => {
        console.log(res.data);
        setPassword({
          current_password: "",
          new_password: "",
          confirm_new_password: "",
        });
        setIsEditing(false);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
        setIsEditing(false);
      });
  };

  const editPasswordElement = () => {
    if (isEditing) {
      let inputStyling = "p-2 mt-2 mb-4 rounded border-2 border-slate-300";
      return (
        <div className="flex flex-col">
          <div className="flex flex-col mx-8 mt-4">
            <label htmlFor="">Current Password</label>
            <input
              type="password"
              className={`${inputStyling}`}
              onChange={(e) => handleCurrentPasswordInput(e)}
            />

            <label htmlFor="">New Password</label>
            <input
              type="password"
              className={`${inputStyling}`}
              onChange={(e) => handleNewPasswordInput(e)}
            />

            <label htmlFor="">Confirm New Password</label>
            <input
              type="password"
              className={`${inputStyling}`}
              onChange={(e) => handleConfirmNewPasswordInput(e)}
            />
          </div>
          <div className="flex flex-row mt-8 justify-end gap-4">
            <button
              className="p-1 pr-2 pl-2 rounded font-bold text-red-500 bg-white flex flex-row justify-center items-center gap-2 border-3 border-red-200 hover:bg-red-100 hover:border-red-300 active:bg-red-300 active:border-red-400 active:text-red-900 transition-colors"
              onClick={() => setIsEditing(false)}
            >
              <MdCancel className="text-md" />
              Cancel
            </button>
            <button
              className="px-3 py-2 rounded font-bold text-white bg-yellow-600 flex flex-row justify-center items-center gap-2   hover:bg-yellow-700 active:bg-yellow-900 transition-colors"
              onClick={() => handleSubmitForm()}
            >
              <MdEdit className="text-sm" />
              Change Password
            </button>
          </div>
        </div>
      );
    }
    if (!isEditing) {
      return (
        <div>
          <p>
            Want to change your password? Click the button to change your
            Password.
          </p>
          <div className="mt-8 flex flex-row justify-end">
            <button
              className="px-3 py-2 rounded font-bold text-white bg-yellow-600 flex flex-row justify-center items-center gap-2   hover:bg-yellow-700 active:bg-yellow-900 transition-colors"
              onClick={() => setIsEditing(true)}
            >
              <MdEdit className="text-lg" />
              Edit Password
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-4 mt-8 bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
      <p className="mb-2 font-semibold text-xl">Change Password</p>
      <hr className="mb-4" />
      {editPasswordElement()}
    </div>
  );
}

export default ChangePassword;
