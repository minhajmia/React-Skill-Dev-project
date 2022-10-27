import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl text-center my-10 text-orange-600">
        Question & Answer{" "}
      </h2>
      <div className="md:w-1/2	 mx-3 md:mx-auto ">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            (1) What is CORS ?
          </div>
          <div className="collapse-content">
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-based security
              mechanism controlled and enforced by the client (web browser).
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5"
        >
          <div className="collapse-title text-xl font-medium">
            (2) Why are you using firebase? What other options do you have to
            implement authentication?
          </div>
          <div className="collapse-content">
            <p>
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5"
        >
          <div className="collapse-title text-xl font-medium">
            (3) How does the private route work?
          </div>
          <div className="collapse-content">
            <p>
              Private route is that route that only grant access to authorized
              users. This means that users must first meet certain conditions
              before accessing that specific route. For instance, your
              application can require only logged-in users be able to visit the
              dashboard page.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5"
        >
          <div className="collapse-title text-xl font-medium">
            (4) What is Node? How does Node work?
          </div>
          <div className="collapse-content">
            <p>
              A node is a point of intersection/connection within a data
              communication network. In an environment where all devices are
              accessible through the network, these devices are all considered
              nodes. The individual definition of each node depends on the type
              of network it refers to. <br /> Node is completely event-driven.
              Basically the server consists of one thread processing one event
              after another. A new request coming in is one kind of event. The
              server starts processing it and when there is a blocking IO
              operation, it does not wait until it completes and instead
              registers a callback function.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
