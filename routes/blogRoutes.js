const express = require("express");
const app = express();
const blogRoutes = express.Router();

const blogController = require("../controllers/blogs")

blogRoutes.get('/',blogController.renderInputForm)
blogRoutes.post('/blog',blogController.addNewBlog)
blogRoutes.get('/view',blogController.viewAllBlogs)
blogRoutes.get('/view/:id', blogController.viewBlog)
blogRoutes.put('/view/:id',blogController.editBlog)
blogRoutes.delete('/delete/:id',blogController.deleteBlog )
module.exports = blogRoutes;