"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import MediumEditor from "medium-editor";
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
    if (editorRef.current) {
      mediumEditor = new MediumEditor(editorRef.current, {
        placeholder: {
          text: placeholder,
          hideOnClick: false, // Hide the placeholder on click
        },
      });

      editorRef.current.focus();
    }

    return () => {
      if (mediumEditor) {
        mediumEditor.destroy();
      }
    };
  }, []);

  // const handleGetContent = () => {
  //   if (mediumEditor) {
  //     const content = mediumEditor.getContent();
  //     const div = document.createElement("div");
  //     div.innerHTML = content;
  //     const textContent = div.textContent || div.innerText;
  //     console.log(textContent);
  //     setEditorContent(textContent);
  //   }
  // };
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
    <div className="">
      <div
        onInput={handleDivChange}
        className={`${style} leading-8 tracking-tight outline-none`}
        ref={editorRef}
      ></div>
    </div>
  );
};

export default MediumEditorComponent;
