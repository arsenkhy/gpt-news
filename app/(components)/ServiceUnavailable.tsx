import React from "react";

function ServiceUnavailable() {
  return (
    <main className="leading-7 px-10 h-screen flex justify-center mt-20">
      <div className="max-w-maxw">
        <h1 className="text-2xl text-center font-bold">Service Unavailable</h1>
        <p className="text-lg text-center">
          Sorry, the service is currently unavailable. Please try again later.
        </p>
      </div>
    </main>
  );
}

export default ServiceUnavailable;
