import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <div className="flex flex-col justify-center m-2 xs:mx-5 sm:m-3 sm:mx-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-extrabold text-center text-black lg:text-3xl md:text-xl">
          About
        </h2>
      </div>
      <div className="container grid gap-8 pt-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center">
        <div className="lg:border-r xs:border-none border-gray-700  opacity-80">
          <img
            className="object-cover w-full h-full mx-auto bg-gray-300"
            src={
              "data:image/png;base64,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"
            }
            alt="oops"
          />
        </div>
        <div className="mt text-2xl">
          <ul>
            <li>Setting Up Your Contact Management System.</li>
            <li>Define Key Attributes for Your Contacts.</li>
            <li>Set Up Your Contact Management Database.</li>
            <li>Start Tracking Contacts Who Interact With You.</li>
            <li>Use a Social Media Dashboard to Manage Interactions Online.</li>
            <li>Create a Dashboard to Visualize Your Relationships.</li>
          </ul>
          <br />
          <br />
          <div className="flex -mt-px divide-x y">
            <div className="flex flex-1 w-0">
              <a>
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="flex flex-1 w-0 -ml-px">
              <a>
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="flex flex-1 w-0 -ml-px">
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="flex flex-1 w-0 -ml-px">
              <a>
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
