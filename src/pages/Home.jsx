import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Home() {
  const navigate = useNavigate();
  const [userId, setUserId] = useContext(UserContext);

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h1>This is the Home Page</h1>
    </div>
  );
}

export default Home;
