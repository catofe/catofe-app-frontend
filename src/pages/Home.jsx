import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import catAssetData from "../modules/catData";
import Cat from "../components/Cat";
import { FaCat } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";

function Home() {
  const navigate = useNavigate();
  const [userId, setUserId] = useContext(UserContext);

  useEffect(() => {}, []);

  return (
    <div className="lg:mx-32 md:mx-8">
      <h1 className="mt-6 mb-8 underline underline-offset-8 text-4xl drop-shadow-lg font-bold tracking-wider flex flex-row gap-4 justify-center items-center">
        WELCOME TO CATOFE
      </h1>
      <div>
        <h2 className="mt-6 mb-4 text-3xl text-gray-400 font-semibold tracking-wider flex flex-row gap-4 justify-center items-center">
          <FaCat />
          MEET OUR CATS
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {catAssetData.map((cat) => {
            return (
              <Cat
                src={cat.url}
                name={cat.name}
                description={cat.description}
              />
            );
          })}
        </div>
      </div>
      <h2 className="mt-6 mb-4 text-3xl text-gray-400 font-semibold tracking-wider flex flex-row gap-4 justify-center items-center">
        <IoRestaurant />
        CHECK OUT OUR MENU
      </h2>
    </div>
  );
}

export default Home;
