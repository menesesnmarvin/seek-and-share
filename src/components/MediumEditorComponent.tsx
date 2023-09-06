"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
// import MediumEditor from "medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import { mediumEditorProps } from "@/model/seekAndShare.model";

const MediumEditorComponent = ({
  style,
  placeholder,
  onChange,
}: mediumEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);

  let mediumEditor: any = null;

  useEffect(() => {
    import("medium-editor").then((module) => {
      const MediumEditor = module.default; // Get the default export of the module
      if (editorRef.current) {
        // Initialize MediumEditor when the component mounts and MediumEditor is loaded
        mediumEditor = new MediumEditor(editorRef.current, {
          placeholder: {
            text: placeholder,
            hideOnClick: false, // Hide the placeholder on click
          },
        });

        editorRef.current.focus();
      }
    });

    return () => {
      if (mediumEditor) {
        mediumEditor.destroy();
      }
    };
  }, []);

  const handleDivChange = () => {
    if (editorRef.current) {
      const newContent =
        placeholder === "Title"
          ? editorRef.current.textContent
          : editorRef.current.innerHTML;
      onChange(newContent);
    }
  };
  return (
    <>
      <div
        onInput={handleDivChange}
        className={`${style} leading-8 tracking-tight outline-none`}
        ref={editorRef}
      ></div>
    </>
  );
};

export default MediumEditorComponent;
