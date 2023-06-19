'use client';
import React, { useState, useEffect, useRef } from 'react';
import { NewsArticle } from "@/app/types";
import SearchResultCarousel from "./SearchResultCarousel";
import TextContent from "@/app/(components)/TextContent"
import { motion } from "framer-motion";
import { WaveLoading } from 'react-loadingg';

type Props = {
  articles: Array<NewsArticle>;
};

const summarizePrompt = "<p><em>Select article to summarize from cards above...</em></p>";

const Results = ({ articles }: Props) => {
    const [text, setText] = useState(summarizePrompt);
    const [key, setKey] = useState(0);
    const [showSummary, setShowSummary] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    const summaryRef = useRef<HTMLDivElement>(null);
    const loadingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (showSummary && summaryRef.current) {
        summaryRef.current.scrollIntoView({ behavior: 'smooth',  block: 'center' });
      }
    }, [showSummary]);

    useEffect(() => {
      if (isLoading && loadingRef.current) {
        loadingRef.current.scrollIntoView({ behavior: 'smooth',  block: 'center' });
      }
    }, [isLoading]);

    const getSummary = async (content: string) => {
        try {
          setIsLoading(true);
          const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/summarize`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
              content: content,
            }),
          });
      
          if (response.ok) {
            const data = await response.json();
            return data;
          } else {
            // Handle error response
            console.log("Request failed with status:", response.status);
            const errorData = await response.json();
            console.log("Error message:", errorData.error);
          }
        } catch (error) {
          // Handle network or other errors
          console.log("Request error:", error);
          return { content: "" };
        }  finally {
          setIsLoading(false); // Set isLoading to false after the API request is completed
        }
        return { content: "" };
    };

    // On summarize button click
    const handleClick = async (text: string, index: number) => {
      setSelectedCard(index);
      setShowSummary(false);

      const newText = await getSummary(text);
      
      // Error getting summary
      if (newText.content === "") {
        setText("<h3><strong>Sorry, we couldn't summarize this article.</strong></h3> <p>Please try again.</p>");
      } else {
        setText(newText.content);
      }

      setShowSummary(true);
      setKey(key + 1);
    };


    return (
        <div className="mt-10">
            <div className="sm:flex items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-center">Found {articles.length} articles</h3>
                <p className="text-sm text-center ml-4">(*5 is the max amount of results per search)</p>
            </div>
            
            <SearchResultCarousel articles={articles} handleClick={handleClick} isLoading={isLoading} selectedCard={selectedCard}/>

            {isLoading ? (
              <div>
                <div className="relative flex items-center flex-col my-5">
                  <WaveLoading color="#000000" size="large" speed="1" className="text-secondary h-50 w-50 dark:filter dark:invert" />
                  <p className="text-base sm:text-lg font-semibold mt-20">Generating summary...</p>
                </div>

                <div className="generating loading animate-pulse" ref={loadingRef}>
                  <div className="min-h-[300px] bg-gray bg-opacity-30 rounded-xl mt-7 sm:mt-10 mb-10 sm:mx-20">
                  </div>
                </div>
              </div>
          ) : showSummary ? (
            <div ref={summaryRef}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                >
                <div className="flex items-center mt-10">
                    <h3 className="text-xl sm:text-2xl font-bold">Article</h3>
                    <h3 className="ml-2 text-xl sm:text-2xl font-bold bg-gradient-blue bg-clip-text text-transparent">Summary</h3>
                </div>
              </motion.div>

              <div className="summary bg-gray bg-opacity-10 rounded-xl mt-7 sm:mt-10 mb-10 sm:mx-20 shadow-lg">
                <div className="px-3 sm:px-10 py-5">
                <motion.div
                  className="box"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  >
                  <TextContent key={key} content={text} />
                </motion.div>

                </div>
              </div>
            </div>
          ) : (
            <p></p>
          )}

        </div>
    );
};
    
export default Results;