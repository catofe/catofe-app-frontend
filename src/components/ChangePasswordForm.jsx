import React, { useContext, useState } from "react";
import "../styles/Password.css";
import { UserContext } from "../App";

import axios from "axios";

function ChangePasswordForm() {
  const [isChanging, setIsChanging] = useState(false);
  const [userId, setUserId] = useContext(UserContext);
  const [password, setPassword] = useState({
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  });

  const handleShowForm = () => {
    setIsChanging(true);
  };

  const handleSubmitForm = () => {
    console.log("Changing Password");
    setIsChanging(false);

    if (password.new_password != password.confirm_new_password) {
      setIsChanging(true);
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
        setIsChanging(false);
      })
      .catch((error) => {
        console.warn("An error happened. Please check console");
        console.error(error);
        setIsChanging(false);
      });
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

  return (
    <div>
      {isChanging ? (
        <div className="password-form">
          <label htmlFor="">Current Password</label>
          <input
            type="password"
            onChange={(e) => handleCurrentPasswordInput(e)}
          />

          <label htmlFor="">New Password</label>
          <input type="password" onChange={(e) => handleNewPasswordInput(e)} />

          <label htmlFor="">Confirm New Password</label>
          <input
            type="password"
            onChange={(e) => handleConfirmNewPasswordInput(e)}
          />
          <button onClick={handleSubmitForm}>Change Password</button>
        </div>
      ) : (
        ""
      )}
      {isChanging ? (
        ""
      ) : (
        <button onClick={handleShowForm}>Change Password</button>
      )}
    </div>
  );
}

export default ChangePasswordForm;
