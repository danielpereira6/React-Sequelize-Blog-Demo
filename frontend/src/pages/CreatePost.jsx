import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/posts", { title, slug, content });
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          className="border p-2 mb-2 w-full"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="Slug"
          className="border p-2 mb-2 w-full"
          value={slug}
          onChange={e => setSlug(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="border p-2 mb-2 w-full"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
