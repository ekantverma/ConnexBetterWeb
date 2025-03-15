import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch all published blogs
    const fetchBlogs = async () => {
        try {
            const response = await axios.get("http://localhost:3000/all");
            setBlogs(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Delete a blog post
    const deleteBlog = async (id) => {
      if (!window.confirm("Are you sure you want to delete this blog?")) return;
  
      try {
          await axios.delete(`http://localhost:3000/delete/${id}`);
          alert("✅ Blog deleted successfully!");
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      } catch (error) {
          console.error("Error deleting blog:", error);
          alert("❌ Failed to delete blog.");
      }
  };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">📜 All Published Blogs</h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading blogs...</p>
            ) : blogs.length === 0 ? (
                <p className="text-center text-gray-500">No blogs found.</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div key={blog._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={blog.mainImage || "https://via.placeholder.com/600"} // Fallback image
                                alt={blog.title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                                <p className="text-gray-600 mt-1">{blog.description ? blog.description.substring(0, 100) + "..." : "No description available."}</p>
                                <p className="text-sm text-gray-500 mt-2">📅 {new Date(blog.createdAt).toLocaleDateString()}</p>
                                <button
                                    onClick={() => deleteBlog(blog._id)}
                                    className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1.5 px-4 rounded text-sm"
                                >
                                    🗑 Delete Blog
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
