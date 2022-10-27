import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div className="mx-5">
      <h2 className="text-center text-2xl font-bold my-10 text-orange-600">
        Terms and Conditions
      </h2>
      <ul>
        <li>
          (1) This page (together with the documents referred to on it) sets out
          the terms and conditions (“Terms and Conditions”) on which you may
          make use of the Website (as defined below), whether as a guest or a
          registered user. This Website is owned and operated by Skill-Dev
        </li>
        <li className="my-5">
          (2) Applicability of the Terms and Conditions: Your usage of the
          Website, any of the Services, any Purchase made and/or any other
          transactions that may be performed or conducted through the Website
          are each subject to these Terms and Conditions.
        </li>
        <li>
          (3) Eligibility: To use the Website, the Services and/or to make any
          Purchase, you must be eighteen (18) years of age or over.
        </li>
        <li className="my-5">
          (4) You do not need to Register to use much of the functionality of
          the Website or to access much of the Services. However, to post and
          advertisement of any kind, you will need to do the registration.
        </li>
        <li>
          (5) Your account must be registered with a valid personal email
          address that you access regularly, so that, among other things,
          administration emails can be sent to you. Any accounts which have been
          registered with someone else’s email address or with temporary email
          addresses may be closed without notice. We may require you to validate
          your account if we believe you have been using an invalid email
          address.
        </li>
      </ul>
      <p className="text-center my-5 text-2xl">
        Go to Register:{" "}
        <Link to="/register" className="underline text-orange-600">
          Register
        </Link>{" "}
      </p>
    </div>
  );
};

export default TermsAndCondition;
