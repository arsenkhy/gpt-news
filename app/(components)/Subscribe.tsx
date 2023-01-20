"use client";
import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setShowWarning(false); // Remove the warning when the email is being entered
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() === "" || !email.includes("@")) {
      // Show the warning message
      setShowWarning(true);
      return;
    }

    setEmail("");

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <div className="text-center px-5 py-10 bg-gray bg-opacity-20">
      <h4 className="font-semibold text-lg mb-6">Subscribe to the Newsletter</h4>
      <p className="text-wh-500 my-3 w-5/6 mx-auto text-base mb-14">
        Enter email address to get top tech news every day
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2 mb-6"
          placeholder="Your Email Address"
          value={email}
          onChange={handleInputChange}
        />
        {showWarning && (
          <p className="text-red-500 mb-2">Please enter a valid email address</p>
        )}
        <button className="bg-third text-primary font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3 opacity-90 hover:opacity-100">
          <span className="opacity-100">SUBSCRIBE</span> 
        </button>
      </form>
      {showPopup && (
        <div className="text-white bg-black px-4 py-2 rounded mt-4 inline-block">
          You have been successfully subscribed to the newsletter. Thank you!
        </div>
      )}
    </div>
  );
};

export default Subscribe;