import { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PostBlog() {
  const [formData, setFormData] = useState({
    title: "",
    description: "", // Quill ke through full blog content
    authorName: "",
    authorImage: "",
    category: "Email Marketing",
    mainImage: "",
    ctaText: "",
    ctaLink: "",
    isPublished: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuillChange = (value) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://connexbetterwebbackend.vercel.app/api/create",
        formData
      );
      alert("✅ Blog Posted Successfully!");

      setFormData({
        title: "",
        description: "",
        authorName: "",
        authorImage: "",
        category: "Email Marketing",
        mainImage: "",
        ctaText: "",
        ctaLink: "",
        isPublished: false,
      });
    } catch (error) {
      console.error("❌ Error posting blog:", error);
      alert("Failed to post blog!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Post a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border p-2 w-full mb-3 rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <div className="mb-3">
          <label className="block font-semibold mb-1">Blog Content</label>
          <ReactQuill
            theme="snow"
            value={formData.description}
            onChange={handleQuillChange}
            modules={{
              toolbar: [
                [{ font: [] }],
                [{ size: ["small", false, "large", "huge"] }],
                ["bold", "italic", "underline", "strike"],
                [{ color: [] }, { background: [] }],
                [{ script: "sub" }, { script: "super" }],
                [{ header: 1 }, { header: 2 }, "blockquote", "code-block"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                [{ direction: "rtl" }],
                ["link", "image", "video", "formula"],
                ["clean"],
              ],
            }}
            style={{ height: "320px" }}
          />
        </div>

        <label className="block font-semibold mb-1 mt-20">Author Name</label>
        <input
          type="text"
          name="authorName"
          placeholder="Author Name"
          className="border p-2 w-full mb-3 rounded"
          value={formData.authorName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="authorImage"
          placeholder="Author Image URL"
          className="border p-2 w-full mb-3 rounded"
          value={formData.authorImage}
          onChange={handleChange}
        />

        <select
          name="category"
          className="border p-2 w-full mb-3 rounded"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="SMS API Integration">SMS API Integration</option>
          <option value="Bulk WhatsApp Marketing">
            Bulk WhatsApp Marketing
          </option>
          <option value="Email Marketing">Email Marketing</option>
        </select>

        <input
          type="text"
          name="mainImage"
          placeholder="Main Image URL"
          className="border p-2 w-full mb-3 rounded"
          value={formData.mainImage}
          onChange={handleChange}
          required
        />

        <div className="mb-3">
          <h3 className="text-lg font-semibold">Additional Images</h3>
          <input
            type="text"
            name="additionalImages"
            placeholder="Additional Image URL"
            className="border p-2 w-full mb-2 rounded"
            value={formData.additionalImages}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="ctaText"
          placeholder="CTA Text"
          className="border p-2 w-full mb-3 rounded"
          value={formData.ctaText}
          onChange={handleChange}
        />

        <input
          type="text"
          name="ctaLink"
          placeholder="CTA Link"
          className="border p-2 w-full mb-3 rounded"
          value={formData.ctaLink}
          onChange={handleChange}
        />

        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                isPublished: e.target.checked,
              }))
            }
            className="mr-2"
          />
          <label>Publish Blog</label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Blog"}
        </button>
      </form>
    </div>
  );
}
