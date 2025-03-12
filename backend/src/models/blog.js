const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  authorName: { type: String, required: true },
  authorImage: { type: String }, // Optional author image
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  mainImage: { type: String, required: true },
  subheadings: [
    {
      heading: { type: String, required: true },
      content: { type: String, required: true },
    },
  ],
  bulletPoints: [{ type: String }],
  additionalImages: [{ type: String }],
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
