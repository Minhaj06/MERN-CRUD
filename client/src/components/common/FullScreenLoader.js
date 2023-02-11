import React from "react";
import loader from "../../assets/img/loader.gif";

function FullScreenLoader() {
  return (
    <div className="progressingDiv">
      <div className="center-screen position-fixed w-100 vh-100 top-0 start-0 bg-white d-flex justify-content-center align-items-center">
        <img width="100px" height="100px" className="loader-size" src={loader} alt="img" />
      </div>
    </div>
  );
}

export default FullScreenLoader;
