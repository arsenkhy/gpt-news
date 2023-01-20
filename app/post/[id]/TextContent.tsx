"use client"
import { Editor, EditorContent, useEditor} from "@tiptap/react";
import React, { useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import { Post } from "@prisma/client";

type Props = {
  content: string,
};

const TextContent = ({ content }: Props) => {

    const editor = useEditor({
      extensions: [StarterKit],
      editorProps: {
        editable: (state) => false,
        attributes: {
          class:
            "prose prose-md xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
        },
      },
      content: content
    });

    return (
      <div>
        <EditorContent editor={editor} />
      </div>
    );
};

export default TextContent;