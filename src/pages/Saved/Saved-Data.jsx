import React from "react";
import SavedContent from "./SavedContent";
import notes from "./notes";

export default function SavedData() {
  return (
    <div className="saved">
      {notes.map((noteItem) => (
        <SavedContent
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
    </div>
  );
}