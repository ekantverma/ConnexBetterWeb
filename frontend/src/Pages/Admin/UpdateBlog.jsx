import { useEffect, useState } from "react";
import axios from "axios";

const UpdateBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    authorName: "",
    authorImage: "",
    category: "",
    mainImage: "",
    subheadings: [{ heading: "", content: "" }],
    bulletPoints: [""],
    additionalImages: [""],
    isPublished: false,
  });

  // 🟢 Sabhi blogs fetch karna
  useEffect(() => {
    axios
      .get("http://localhost:3000/all")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  // 🟢 Form input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🟢 Subheadings update
  const handleSubheadingChange = (index, key, value) => {
    const updatedSubheadings = [...formData.subheadings];
    updatedSubheadings[index][key] = value;
    setFormData((prev) => ({ ...prev, subheadings: updatedSubheadings }));
  };

  // 🟢 Subheading Add
  const addSubheading = () => {
    setFormData((prev) => ({
      ...prev,
      subheadings: [...prev.subheadings, { heading: "", content: "" }],
    }));
  };

  // 🟢 Bullet Point Add
  const addBulletPoint = () => {
    setFormData((prev) => ({
      ...prev,
      bulletPoints: [...prev.bulletPoints, ""],
    }));
  };

  // 🟢 Additional Image Add
  const addAdditionalImage = () => {
    setFormData((prev) => ({
      ...prev,
      additionalImages: [...prev.additionalImages, ""],
    }));
  };

  // 🟢 Blog update function
  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/update/${selectedBlog._id}`,
        formData
      );
      alert("Blog updated successfully!");
      setIsModalOpen(false);
      window.location.reload();
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  };

  return (
    <div className="p-4">
      {/* 🟢 Sabhi blogs dikhana */}
      <div className="grid grid-cols-3 gap-6 p-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-lg shadow-lg overflow-hidden bg-white"
          >
            {/* 🟢 Blog Image */}
            <img
              src={blog.mainImage || "https://via.placeholder.com/400"}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* 🟢 Blog Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {blog.description.substring(0, 100)}...
              </p>

              {/* 🟢 Author Info */}
              <div className="flex items-center mt-3">
                <img
                  src={blog.authorImage || "https://via.placeholder.com/50"}
                  alt={blog.authorName}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="text-sm font-semibold">{blog.authorName}</span>
              </div>

              {/* 🟢 Update Button */}
              <button
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => {
                  setSelectedBlog(blog);
                  setFormData(blog);
                  setIsModalOpen(true);
                }}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🟢 Modal Popup */}
      {isModalOpen && selectedBlog && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold">Update Blog</h2>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border p-2 w-full my-2"
              placeholder="Title"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 w-full my-2"
              placeholder="Description"
            ></textarea>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              className="border p-2 w-full my-2"
              placeholder="Author Name"
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border p-2 w-full my-2"
              placeholder="Category"
            />

            {/* 🟢 Subheadings */}
            <h3 className="text-lg font-bold mt-4">Subheadings</h3>
            {formData.subheadings.map((sub, index) => (
              <div key={index} className="border p-2 my-2">
                <input
                  type="text"
                  value={sub.heading}
                  onChange={(e) =>
                    handleSubheadingChange(index, "heading", e.target.value)
                  }
                  className="border p-2 w-full"
                  placeholder="Heading"
                />
                <textarea
                  value={sub.content}
                  onChange={(e) =>
                    handleSubheadingChange(index, "content", e.target.value)
                  }
                  className="border p-2 w-full mt-2"
                  placeholder="Content"
                ></textarea>
              </div>
            ))}
            <button
              onClick={addSubheading}
              className="mt-2 px-4 py-2 bg-gray-500 text-white rounded"
            >
              + Add Subheading
            </button>

            {/* 🟢 Bullet Points */}
            <h3 className="text-lg font-bold mt-4">Bullet Points</h3>
            {formData.bulletPoints.map((point, index) => (
              <input
                key={index}
                type="text"
                value={point}
                onChange={(e) => {
                  let newPoints = [...formData.bulletPoints];
                  newPoints[index] = e.target.value;
                  setFormData((prev) => ({ ...prev, bulletPoints: newPoints }));
                }}
                className="border p-2 w-full my-2"
                placeholder="Bullet Point"
              />
            ))}
            <button
              onClick={addBulletPoint}
              className="mt-2 px-4 py-2 bg-gray-500 text-white rounded"
            >
              + Add Bullet Point
            </button>

            {/* 🟢 Additional Images */}
            <h3 className="text-lg font-bold mt-4">Additional Images</h3>
            {formData.additionalImages.map((img, index) => (
              <input
                key={index}
                type="text"
                value={img}
                onChange={(e) => {
                  let newImages = [...formData.additionalImages];
                  newImages[index] = e.target.value;
                  setFormData((prev) => ({
                    ...prev,
                    additionalImages: newImages,
                  }));
                }}
                className="border p-2 w-full my-2"
                placeholder="Image URL"
              />
            ))}
            <button
              onClick={addAdditionalImage}
              className="mt-2 px-4 py-2 bg-gray-500 text-white rounded"
            >
              + Add Image
            </button>

            {/* 🟢 Update Button */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Update Blog
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateBlog;
