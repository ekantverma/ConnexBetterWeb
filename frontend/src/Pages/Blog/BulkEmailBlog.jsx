import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";

const BulkEmailBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/category/Email%20Marketing") 
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={blog.mainImage} alt={blog.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4 hover:text-blue-600 transition-colors">
              {blog.title}
            </h3>
            <p className="text-gray-500 text-sm">{new Date(blog.createdAt).toDateString()}</p>
            <p className="text-gray-600 text-sm font-medium">{blog.category}</p>
            <p className="mt-2 text-gray-700 line-clamp-2">{blog.content}</p>
            <Link to={`/BlogDetail/${blog._id}`} className="text-blue-500 mt-3 block font-semibold">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulkEmailBlogs;
