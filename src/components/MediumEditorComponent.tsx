/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import MediumEditor from "medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import { mediumEditorProps } from "@/model/seekAndShare.model";

const MediumEditorComponent = ({ style, placeholder }: mediumEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editorContent, setEditorContent] = useState<string>("");

  let mediumEditor: MediumEditor | null = null;

  useEffect(() => {
    if (editorRef.current) {
      mediumEditor = new MediumEditor(editorRef.current, {
        placeholder: {
          text: placeholder,
          hideOnClick: false, // Hide the placeholder on click
        },
      });
    }

    return () => {
      if (mediumEditor) {
        mediumEditor.destroy();
      }
    };
  }, []);

  const handleGetContent = () => {
    if (mediumEditor) {
      const content = mediumEditor.getContent();
      console.log(content);
      setEditorContent(content);
    }
  };
  //   const handleGetContent = () => {
  //     if (mediumEditor) {
  //       const content = mediumEditor.getContent();
  //       const div = document.createElement("div");
  //       div.innerHTML = content;
  //       const textContent = div.textContent || div.innerText;
  //       console.log(textContent);
  //       setEditorContent(textContent);
  //     }
  //   };

  return (
    <div className="">
      <div
        className={`${style} leading-8 tracking-tight outline-none`}
        ref={editorRef}
      ></div>
      {/* <button
        className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={handleGetContent}
      >
        Get Content
      </button> */}
      {/* <div className="mt-4">{editorContent}</div> */}
    </div>
  );
};

export default MediumEditorComponent;
