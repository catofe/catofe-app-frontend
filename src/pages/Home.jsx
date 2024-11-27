import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

import Menu from "../components/Menu";

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
      <Menu />
      <p>{userId}</p>
    </div>
  );
}

export default Home;
