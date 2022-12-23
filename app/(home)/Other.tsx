import React from 'react'
import OtherCard from 'app/(components)/OtherCard';

// type Props = {}

const Other = () => {
  return (
    <section className="mt-10">
      <hr className="border-1 opacity-20" />

      <div className="sm:flex justify-between items-center gap-3 mt-7 mb-5">
        <OtherCard className="basis-1/3" categoryTitle="Tech & Gadgets"/>
        <OtherCard className="basis-1/3 md:mx-8" categoryTitle="Science"/>
        <OtherCard className="basis-1/3" categoryTitle="Ideas"/>
      </div>  
    </section>
  );
};

export default Other;