import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../App";

import { FaTrash, FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

function Delete() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [userId, setUserId] = useContext(UserContext);
  const navigate = useNavigate();

  const handleConfirmationInput = (e) => {
    setConfirmation(e.target.value);
  };

  const handleDeleteAccount = () => {
    if (!(confirmation == "I want to delete this account!")) {
      console.log("Deletion Failed");
      return;
    }
    setIsDeleting(false);

    axios
      .delete(`http://localhost:3000/api/user/${userId}/`)
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
        setIsChanging(false);
      });
  };

  const deleteFormElement = () => {
    if (isDeleting) {
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-center my-4 text-gray-400 ">
            To confirm account deletion, type in the following phrase:
            <p className="mt-1 text-gray-500 text-lg font-semibold tracking-wider">
              "I want to delete this account!"
            </p>
          </label>
          {confirmation == "I want to delete this account!" ? (
            <div className="flex flex-row gap-2 justify-center items-center text-center text-green-500 mt-4 font-thin">
              <FaCheck />
              <p>Input matches with pharse. You can delete your account now.</p>
            </div>
          ) : (
            <div className="flex flex-row gap-2 justify-center items-center text-center text-red-500 mt-4 font-thin">
              <ImCross />
              <p>
                Input does not match with phrase. You cannot delete your account
                now.
              </p>
            </div>
          )}
          <input
            type="text"
            className="p-2 mx-8 mb-4 rounded border-2 border-slate-300 text-center"
            placeholder="Enter delete phrase here"
            onChange={(e) => handleConfirmationInput(e)}
          />
          <div className="flex flex-row mt-8 justify-end gap-4">
            <button
              className="p-1 pr-2 pl-2 rounded font-bold text-red-500 bg-white flex flex-row justify-center items-center gap-2 border-3 border-red-200 hover:bg-red-100 hover:border-red-300 active:bg-red-300 active:border-red-400 active:text-red-900 transition-colors"
              onClick={() => setIsDeleting(false)}
            >
              <MdCancel className="text-md" />
              Cancel
            </button>
            <button
              className="p-1 pr-2 pl-2 rounded font-bold text-white bg-red-500 flex flex-row justify-center items-center gap-2   hover:bg-red-600 active:bg-red-800 transition-colors"
              onClick={() => handleDeleteAccount()}
            >
              <FaTrash className="text-sm" />
              Delete
            </button>
          </div>
        </div>
      );
    }
    if (!isDeleting) {
      return (
        <div>
          <p>
            Do you want to delete your account? You can start the deletion
            process by clicking the button.
          </p>
          <div className="mt-8 flex flex-row justify-end">
            <button
              className="px-3 py-2 rounded font-bold text-white bg-red-500 flex flex-row justify-center items-center gap-2   hover:bg-red-600 active:bg-red-800 transition-colors"
              onClick={() => setIsDeleting(true)}
            >
              <IoIosWarning className="text-lg" />
              Start Account Deletion
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-4 mt-8 bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
      <p className="mb-2 font-semibold text-xl">Delete Account</p>
      <hr className="mb-4" />
      {deleteFormElement()}
    </div>
  );
}

export default Delete;
