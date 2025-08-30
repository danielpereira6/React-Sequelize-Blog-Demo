import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${slug}`).then(res => setPost(res.data));
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container post-page">
      <h1>{post.title}</h1>
      <p className="views">{post.views} views</p>
      <div>{post.content}</div>
    </div>
  );
}
