import React, { useContext, useState } from "react";
import "../styles/Password.css";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function DeleteAccountForm() {
  const [confirmation, setConfirmation] = useState("");
  const [userId, setUserId] = useContext(UserContext);
  const navigate = useNavigate();

  const handleConfirmationInput = (e) => {
    setConfirmation(e.target.value);
  };

  const handleDeleteAccount = () => {
    console.log(confirmation);
    if (!confirmation == "I want to delete this account") {
      console.log("Delete account failed");
      return;
    }

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
  return (
    <div>
      <input type="text" onChange={(e) => handleConfirmationInput(e)} />
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
}

export default DeleteAccountForm;
