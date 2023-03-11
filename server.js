const express = require('express')
const app = express();
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const blog = require('./models/blogsmodel')
const connectDB = require('./config/db')
const PORT = process.env.PORT;


connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine','ejs')
app.engine('ejs',ejsMate)

app.get('/',(req,res)=>{
    res.render('./views/form')
})

app.post('/blog',async(req,res)=>{
    const newBlog = new blog(req.body.blog)
    await newBlog.save()
    res.redirect('/blogView')

})
app.get('/blogView',async(req,res)=>{
    const blogs = blog.find({})
    res.send(blogs)
})

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`.yellow.underline)
);