import React from 'react'

const Subscribe = () => {
  return (
    <div className="text-center px-5 py-10">
      <h4 className="font-semibold text-base">Subscribe to the Newsletter</h4>
      <p className="text-wh-500 my-3 w-5/6 mx-auto">
        Enter email address to get top tech news every day
      </p>
      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Your Email Address"
      />
      <button className="bg-third text-primary font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3 hover:opacity-70">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Subscribe