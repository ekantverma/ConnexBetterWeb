

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLikes(res.data.stats.likes);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  if (!blog)
    return (
      <p className="text-center mt-10 text-gray-600 text-lg animate-pulse">
        Loading...
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Blog Image & Category */}
      <div className="relative group">
        <img
          src={blog.mainImage}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105 duration-300"
        />
        <div className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-1 rounded-md shadow-lg text-sm font-semibold">
          {blog.category}
        </div>
      </div>

      {/* Blog Title & Created At */}
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-4xl font-bold text-gray-800 transition-all duration-300 hover:text-blue-600">
          {blog.title}
        </h1>
        <p className="text-gray-500 text-sm mt-2 sm:mt-0">
          📅 {new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center mt-4 space-x-4">
        <img
          src={blog.authorImage}
          alt={blog.authorName}
          className="w-12 h-12 rounded-full border border-gray-300 hover:scale-110 transition-transform"
        />
        <p className="text-gray-700 font-medium">By {blog.authorName}</p>
      </div>

      {/* Blog Description */}
      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        {blog.description}
      </p>

      {/* Blog Subsections */}
      {blog.subheadings.map((section, index) => (
        <div key={index} className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3">
            {section.heading}
          </h2>
          <p className="mt-2 text-gray-700 text-lg leading-relaxed">
            {section.content}
          </p>
        </div>
      ))}

      {/* Bullet Points */}
      <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-2">
        {blog.bulletPoints.map((point, index) => (
          <li key={index} className="text-lg">{point}</li>
        ))}
      </ul>

      {/* Additional Images */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {blog.additionalImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="blog-content"
            className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Blog Stats & Like Button */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg flex items-center justify-between shadow-md">
        <p className="text-gray-800 font-medium text-lg">
          🔥 {blog.stats.views} Views | ❤️ {likes} Likes | 🔄{" "}
          {blog.stats.shares} Shares
        </p>
        <button
          onClick={handleLike}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-medium shadow-md hover:bg-red-600 transition-transform duration-300"
        >
          ❤️ Like
        </button>
      </div>

      {/* Related Posts */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 border-b-2 pb-2">
          Related Posts
        </h3>
        <ul className="mt-4 space-y-2">
          {blog.relatedPosts.map((post, index) => (
            <li key={index}>
              <Link
                to={post.url}
                className="text-blue-500 hover:underline hover:text-blue-700 text-lg transition-colors duration-200"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action Button */}
      <div className="mt-8 text-center">
        <a
          href={blog?.cta?.link || "#"}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
        >
          {blog?.cta?.text || "Read More"}
        </a>
      </div>
    </div>
  );
};

export default BlogDetail;
