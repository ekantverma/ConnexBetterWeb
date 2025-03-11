const Blog = require('../models/blog');

// Create a new blog post
exports.createPost = async (req, res) => {
    try {
        const { title, description, image, authorName, category } = req.body;

        if (!title || !description || !image || !authorName || !category) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newPost = new Blog({ title, description, image, authorName, category });
        await newPost.save();

        res.status(201).json({ message: "Blog post created successfully", post: newPost });
    } catch (error) {
        console.error("Create Post Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get all blog posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 });

        res.status(200).json(posts);
    } catch (error) {
        console.error("Get All Posts Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get blog posts by category
exports.getPostsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const posts = await Blog.find({ category }).sort({ createdAt: -1 });

        if (!posts.length) {
            return res.status(404).json({ message: "No posts found for this category" });
        }

        res.status(200).json(posts);
    } catch (error) {
        console.error("Get Posts by Category Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get a single blog post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);

        if (!post) return res.status(404).json({ message: "Post not found" });

        res.status(200).json(post);
    } catch (error) {
        console.error("Get Post by ID Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Update a blog post
exports.updatePost = async (req, res) => {
    try {
        const { title, description, image, authorName, category } = req.body;

        if (!title || !description || !image || !authorName || !category) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const updatedPost = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, description, image, authorName, category },
            { new: true, runValidators: true }
        );

        if (!updatedPost) return res.status(404).json({ message: "Post not found" });

        res.status(200).json({ message: "Blog post updated successfully", post: updatedPost });
    } catch (error) {
        console.error("Update Post Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete a blog post
exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Blog.findByIdAndDelete(req.params.id);

        if (!deletedPost) return res.status(404).json({ message: "Post not found" });

        res.status(200).json({ message: "Blog post deleted successfully" });
    } catch (error) {
        console.error("Delete Post Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
