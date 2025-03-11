const express = require('express');
const {
    createPost,
    getAllPosts,
    getPostsByCategory,
    getPostById,
    updatePost,
    deletePost
} = require('../controllers/blogController');

const router = express.Router();

// Create a new blog post
router.post('/create', createPost);

// Get all blog posts
router.get('/all', getAllPosts);

// Get blog posts by category
router.get('/category/:category', getPostsByCategory);

// Get a single blog post by ID
router.get('/:id', getPostById);

// Update a blog post by ID
router.put('/update/:id', updatePost);

// Delete a blog post by ID
router.delete('/delete/:id', deletePost);

module.exports = router;
