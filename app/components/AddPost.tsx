"use client";

import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <form className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tell me what is in your mind 🍀?"
          id=""
        ></textarea>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          } `}
        >{`${title.length}/300`}</p>
        <button
          className="text-sm bg-teal-600 text-white py-2 px-6 rounded-md"
          type="submit"
          disabled={isDisabled}
        >
          Create a Post
        </button>
      </div>
    </form>
  );
}
