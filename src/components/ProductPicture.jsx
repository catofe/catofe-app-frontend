import React from "react";

function ProductPicture({ src, className }) {
  return (
    <div
      className={`${className} flex flex-row justify-center items-center bg-cover`}
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
}

export default ProductPicture;
