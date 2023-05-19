"use client";

import { ChangeEvent, useState } from "react";

export function MediaPicture() {
  const [preview, setPreview] = useState<string | null>(null);

  function OnFIleSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);

    setPreview(previewURL);
  }
  return (
    <>
      <div>
        <input
          onChange={OnFIleSelected}
          name="coverUrl"
          type="file"
          id="media"
          accept="image/*"
          className="invisible h-0 w-0"
        />

        {preview && (
          // eslint-disable-next-line
          <img
            src={preview}
            alt="preview"
            className="aspect-video w-full rounded-lg object-cover"
          />
        )}
      </div>
    </>
  );
}
