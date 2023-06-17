"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import React, { useState, useEffect } from "react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  content: string;
};

const TextContent = ({ content }: Props) => {
  const [key, setKey] = useState(0);
  
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
  });

  return (
    <div key={key}>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextContent;
