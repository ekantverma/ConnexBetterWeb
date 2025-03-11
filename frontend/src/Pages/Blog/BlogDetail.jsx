import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/${id}`) // ✅ API Call
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!blog) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
      <p className="text-gray-600">{blog.category}</p>
      <p className="mt-4 text-gray-700">{blog.description}</p>
      <p className="mt-6 text-gray-500 italic">Author: {blog.authorName}</p>
    </div>
  );
};

export default BlogDetail;
