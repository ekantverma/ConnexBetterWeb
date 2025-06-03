const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },  // Ye HTML string store karega (rich text)
  authorName: { type: String, required: true },
  authorImage: { type: String }, // URL string optional
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  mainImage: { type: String, required: true }, // URL string
  subheadings: [
    {
      heading: { type: String, required: true },
      content: { type: String, required: true }, // HTML string (rich text)
    },
  ],
  bulletPoints: [{ type: String }], // Plain text list
  additionalImages: [{ type: String }], // URLs
  stats: {
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
  },
  relatedPosts: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  cta: {
    text: { type: String },
    link: { type: String },
  },
  isPublished: { type: Boolean, default: false },
});

module.exports = mongoose.model("Blog", blogSchema);
