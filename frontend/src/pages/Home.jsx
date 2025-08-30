import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then(res => setPosts(res.data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl mb-4">All Posts</h1>
      {posts.map(p => (
        <div key={p.id} className="post-card">
          <h2><Link to={`/post/${p.slug}`}>{p.title}</Link></h2>
          <span className="views">{p.views} views</span>
        </div>
      ))}
    </div>

  );
}
