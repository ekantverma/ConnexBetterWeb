import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://connexbetterwebbackend.vercel.app/api/all")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full px-[60px] py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col h-[375px] w-full"
          >
            {/* Image */}
            <img
              src={blog.mainImage}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />

            {/* Card Content */}
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h3 className="text-[20px] font-bold text-black mb-1">
                  {blog.title}
                </h3>
                <p className="text-[#3B3939] text-[14px] uppercase">
                  {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="text-gray-700 font-medium mt-1 text-[15px]">
                  {blog.category}
                </p>
              </div>

              {/* Read More Button */}
              <Link
                to={`/BlogDetail/${blog._id}`}
                className="text-blue-600 font-semibold text-[16px] mt-4 block hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
