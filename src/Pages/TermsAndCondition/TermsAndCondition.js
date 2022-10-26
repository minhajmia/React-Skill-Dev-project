import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Go to Register:{" "}
        <Link to="/register" className="underline">
          Register
        </Link>{" "}
      </p>
    </div>
  );
};

export default TermsAndCondition;
