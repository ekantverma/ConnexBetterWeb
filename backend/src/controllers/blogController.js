const Blog = require('../models/blog');

// Create a new blog post
exports.createPost = async (req, res) => {
    try {
        const { title, description, image, authorName } = req.body;
        const newPost = new Blog({ title, description, image, authorName });
        await newPost.save();
        res.status(201).json({ message: "Blog post created successfully", post: newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all blog posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single blog post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a blog post
exports.updatePost = async (req, res) => {
    try {
        const { title, description, image, authorName } = req.body;
        const updatedPost = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, description, image, authorName },
            { new: true }
        );
        if (!updatedPost) return res.status(404).json({ message: "Post not found" });
        res.status(200).json({ message: "Blog post updated successfully", post: updatedPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a blog post
exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: "Post not found" });
        res.status(200).json({ message: "Blog post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};