import React from "react";
import { FaGripfire } from "react-icons/fa";
import { PiSnowflakeBold } from "react-icons/pi";

function Tag({ tag, background = "bg-slate-200", color = "text-black" }) {
  let icon = "";

  if (tag == "cold") {
    background = "bg-blue-100";
    icon = <PiSnowflakeBold />;
  }
  if (tag == "hot") {
    background = "bg-red-100";
    icon = <FaGripfire />;
  }

  return (
    <div
      className={`${background} ${color} px-2 rounded-xl flex flex-row justify-center items-center gap-1`}
    >
      {icon}
      {tag.charAt(0).toUpperCase() + tag.slice(1)}
    </div>
  );
}

export default Tag;
