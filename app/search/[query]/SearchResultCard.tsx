import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NewsArticle } from "@/app/types";

type Props = {
  article: NewsArticle;
  handleClick: (newText: string, index: number) => void;
  isLoading: boolean;
  index: number;
  selectedCard: number | null;
  centerSlide: (index: number) => void;
};

const SideCard = ({
    article,
    handleClick,
    isLoading,
    index,
    selectedCard,
    centerSlide,
}: Props) => {
  const { title, urlToImage, description } = article || {};
  const source = article?.source?.name || "Unknown";

  const date = new Date(article?.publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  const handleCardClick = () => {
    handleClick(article?.content, index);
    centerSlide(index);
  };

  return (
    <div className={`w-250 max-w-[300px] h-112 bg-primary bg-opacity-80 rounded-xl mb-14 shadow-xl ${
        selectedCard === index ? 'border-4 border-third' : ''
      }`}>
      <div className="relative items-center gap-3 h-full ">
            <div className={`basis-full relative w-auto h-2/5`}>
                <Image
                    className="rounded-t-lg"
                    fill
                    alt="Image"
                    src={urlToImage}
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* INFO */}
            <div className="mx-3 my-2">
                <h4
                    className="font-bold text-lg line-clamp-2">
                    {title}
                </h4>

                <div className="flex justify-between my-2 gap-3 text-primary rounded-lg mb-5">
                    <div className="inline-block bg-secondary bg-opacity-70 rounded-2xl py-1 px-2">
                        <h5 className="text-sm">{source}</h5>
                    </div>
                    <div className=" py-1 px-2">
                        <h5 className="text-sm text-secondary italic">{formattedDate}</h5>
                    </div>
                </div>

                <p
                    className="text-sm line-clamp-4">
                    {description}
                </p>
            </div>

             {/* ACTION BUTTONS */}
             <div className="absolute flex justify-between bottom-0 mx-10 my-4 gap-7">
                <Link
                    href={article?.url} target="_blank"
                    className="text-md underline flex items-center hover:text-third">
                    Read original
                </Link>

                <button 
                    className={`px-4 py-2 text-white bg-secondary text-base rounded transition-all ${
                        isLoading ? 'disabled' : 'hover:scale-110'
                      }`}
                    onClick={() => handleCardClick()}
                    disabled={isLoading}
                >
                    Summarize   
                </button>
             </div>
        </div>
    </div>
  );
};

export default SideCard;

