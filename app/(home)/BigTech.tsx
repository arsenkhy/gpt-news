import React from "react";
import Card from "app/(components)/Card";

// type Props = {
//   travelPosts: Array<Post>;
// };

const BigTech = () => {
  return (
    <section className="mt-10">
      <hr className="border-1 opacity-20" />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <p className="font-bold text-2xl">Big tech & Startups</p>
      </div>

      {/* MAIN CARD */}
      <Card
        className=" sm:flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
        // post={travelPosts[3]}
      />

      {/* CARDS ROW */}
      <div className="sm:flex justify-between gap-8">
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
        //   post={travelPosts[0]}
        />
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
        //   post={travelPosts[1]}
        />
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
        //   post={travelPosts[2]}
        />
      </div>
    </section>
  );
};

export default BigTech;