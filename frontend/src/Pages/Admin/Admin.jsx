import { useState, useEffect } from "react";
import axios from "axios";
import PostBlog from "./PostBlog";
import DeleteBlog from "./DeleteBlog";
import UpdateBlog from "./UpdateBlog";

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [showPopup, setShowPopup] = useState(true);
  const [password, setPassword] = useState("");
  const [selectedPage, setSelectedPage] = useState("allBlogs");

  useEffect(() => {
    if (auth) fetchBlogs();
  }, [auth]);

  const handleLogin = () => {
    if (password === "admin123") {
      setAuth(true);
      setShowPopup(false);
    } else {
      alert("Invalid Password!");
    }
  };

  const fetchBlogs = async () => {
    try {
      // const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/all`);
      const res = await axios.get("https://connexbetterwebbackend.vercel.app/api/all");
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <div className="flex h-screen mt-3 ">
      {/* Left Sidebar Navigation */}
      {auth && (
        <div className="w-1/4 bg-gray-800 text-white p-4">
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
          <ul className="space-y-4">
            <li
              className={`cursor-pointer p-2 rounded ${
                selectedPage === "postBlog" ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedPage("postBlog")}
            >
              ➕ Post Blog
            </li>
            <li
              className={`cursor-pointer p-2 rounded ${
                selectedPage === "updateBlog" ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedPage("updateBlog")}
            >
              ✏️ Update Blog
            </li>
            <li
              className={`cursor-pointer p-2 rounded ${
                selectedPage === "deleteBlog" ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedPage("deleteBlog")}
            >
              ❌ Delete Blog
            </li>
            <li
              className={`cursor-pointer p-2 rounded ${
                selectedPage === "allBlogs" ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedPage("allBlogs")}
            >
              📜 All Blogs
            </li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        {showPopup && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
              <input
                className="border p-2 w-full mb-4"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleLogin}
                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
              >
                Login
              </button>
            </div>
          </div>
        )}

        {auth && (
          <div className="w-3/4 h-[90%] overflow-y-auto">
            {selectedPage === "allBlogs" && (
              <>
                <h1 className="text-3xl font-semibold mb-6">All Blogs</h1>
                {blogs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                      <div
                        key={blog._id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        {/* Blog Image */}
                        <img
                          src={
                            blog.mainImage || "https://via.placeholder.com/400"
                          }
                          alt={blog.title}
                          className="w-full h-48 object-cover"
                        />

                        {/* Blog Content */}
                        <div className="p-4">
                          <h3 className="text-xl font-bold text-gray-900">
                            {blog.title}
                          </h3>
                          <p className="text-gray-700 mt-2 line-clamp-3">
                            {blog.description}
                          </p>

                          {/* Blog Footer */}
                          <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                              {blog.category}
                            </span>
                            <span>✍ {blog.authorName}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center">
                    Blog loading.....
                  </p>
                )}
              </>
            )}

            {selectedPage === "postBlog" && (
              <div>
                <PostBlog />
              </div>
            )}

            {selectedPage === "updateBlog" && (
              <div>
                <UpdateBlog />
              </div>
            )}

            {selectedPage === "deleteBlog" && (
              <div>
                <DeleteBlog />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
