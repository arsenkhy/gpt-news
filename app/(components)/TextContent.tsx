"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import React, { useState, useEffect } from "react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  content: string;
};

const TextContent = ({ content }: Props) => {
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [content]);

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      editable: (state) => false,
      attributes: {
        class: "prose prose-md xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
      },
    },
    content: content,
    onCreate: () => {setIsLoading(false);}
  });

  return (
    <div key={key}>
      {isLoading ? (
        <div className="animate-pulse">
          <div className="bg-gray opacity-30 h-8 mb-3 w-1/2"></div>
          <div className="bg-gray opacity-30 h-5 mb-3 w-full"></div>
          <div className="bg-gray opacity-30 h-6 mb-3 w-5/6"></div>
          <div className="bg-gray opacity-30 h-5 mb-10 w-9/10"></div>
          <div className="bg-gray opacity-30 h-7 mb-3 w-1/2"></div>
          <div className="bg-gray opacity-30 h-5 mb-3 w-full"></div>
          <div className="bg-gray opacity-30 h-6 mb-3 w-5/6"></div>
          <div className="bg-gray opacity-30 h-5 mb-3 w-9/10 text-transparent line-clamp-1">
          The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
        </div>
      </div>
      ) : (
        <div/>
      )}
        <EditorContent editor={editor} />
    </div>
  );
};

export default TextContent;