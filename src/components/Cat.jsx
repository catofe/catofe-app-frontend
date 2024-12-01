import React from "react";

function Cat({ src, name, description }) {
  return (
    <div className="p-4 m-4 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl">
      <div
        className="p-4 py-32 mb-4 rounded drop-shadow-lg bg-cover hover:drop-shadow-xl hover:scale-115 hover:-translate-y-2 transition-all"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="mb-2 font-bold text-lg">{name}</div>
      <div className="text-justify text-gray-600">{description}</div>
    </div>
  );
}

export default Cat;
