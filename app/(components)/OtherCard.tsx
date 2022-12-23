import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    className?: string;
    categoryTitle: string;
};

const OtherCard = ({
    className,
    categoryTitle,
  }: Props) => {
  return (
    <div className={`mb-10 ${className}`}>
        <div className="inline-block border-2 border-secondary rounded-2xl mb-2">
            <p className="text-lg font-bold text-secondary mx-3 my-1">{categoryTitle}</p>
        </div>
            
        {/* IMAGE */}    
        <div className="relative w-auto mb-3 bg-gray h-80">
            {/* for image */}
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-3">
            <Link className="font-semibold text-lg" href="/">The link placeholder</Link>
            <hr className="border-1 opacity-20" />
            <Link className="font-semibold text-lg" href="/">The link placeholder</Link>
            <hr className="border-1 opacity-20" />
            <Link className="font-semibold text-lg" href="/">The link placeholder</Link>
        </div>    

            
    </div>
  );
};

export default OtherCard;