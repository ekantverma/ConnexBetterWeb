const Blog = require("../models/blog.js");

// ✅ Create a new blog post
exports.createPost = async (req, res) => {
    try {
        const { title, description, authorName, category, mainImage, subheadings, bulletPoints, additionalImages, isPublished } = req.body;

        // 🛑 Validate required fields
        if (!title || !description || !authorName || !category || !mainImage) {
            return res.status(400).json({ error: "Title, description, authorName, category, and mainImage are required." });
        }

        // ✅ Ensure category is valid
        const allowedCategories = ["SMS API Integration", "Bulk WhatsApp Marketing", "Email Marketing"];
        if (!allowedCategories.includes(category)) {
            return res.status(400).json({ error: "Invalid category. Allowed categories: SMS API Integration, Bulk WhatsApp Marketing, Email Marketing" });
        }

        // ✅ Create new blog post
        const newPost = new Blog({
            title,
            description,
            authorName,
            category,
            mainImage,
            subheadings,
            bulletPoints,
            additionalImages,
            isPublished: isPublished || false,
        });

        await newPost.save();
        res.status(201).json({ message: "Blog post created successfully", post: newPost });

    } catch (error) {
        console.error("Create Post Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ✅ Get all blog posts (Only Published)
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        console.error("Get All Posts Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ✅ Get blog posts by category
exports.getPostsByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        // 🛑 Validate category
        const allowedCategories = ["SMS API Integration", "Bulk WhatsApp Marketing", "Email Marketing"];
        if (!allowedCategories.includes(category)) {
            return res.status(400).json({ error: "Invalid category provided" });
        }

        const posts = await Blog.find({ category, isPublished: true }).sort({ createdAt: -1 });
        if (!posts.length) {
            return res.status(404).json({ message: "No posts found for this category" });
        }

        res.status(200).json(posts);
    } catch (error) {
        console.error("Get Posts by Category Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ✅ Get a single blog post by ID & increase views count
exports.getPostById = async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);

        if (!post) return res.status(404).json({ message: "Post not found" });

        // ✅ Increment view count
        post.views += 1;
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error("Get Post by ID Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ✅ Update a blog post
exports.updatePost = async (req, res) => {
    try {
        const { title, description, authorName, category, mainImage, subheadings, bulletPoints, additionalImages, isPublished } = req.body;

        // 🛑 Validate fields
        if (!title || !description || !authorName || !category || !mainImage) {
            return res.status(400).json({ error: "Title, description, authorName, category, and mainImage are required." });
        }

        // 🛑 Validate category
        const allowedCategories = ["SMS API Integration", "Bulk WhatsApp Marketing", "Email Marketing"];
        if (!allowedCategories.includes(category)) {
            return res.status(400).json({ error: "Invalid category provided" });
        }

        // ✅ Update blog post
        const updatedPost = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, description, authorName, category, mainImage, subheadings, bulletPoints, additionalImages, isPublished },
            { new: true, runValidators: true }
        );

        if (!updatedPost) return res.status(404).json({ message: "Post not found" });

        res.status(200).json({ message: "Blog post updated successfully", post: updatedPost });

    } catch (error) {
        console.error("Update Post Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ✅ Delete a blog post
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
