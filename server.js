const express = require('express')
const app = express();
const path = require('path')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const blog = require('./models/blogsmodel')
const connectDB = require('./config/db')
app.set('views',path.join(__dirname,'./views'))
const PORT =4000 ;
// process.env.PORT;


connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine','ejs')
app.engine('ejs',ejsMate)

app.get('/',(req,res)=>{
    blog.findByIdAndDelete({_id: '640cab6833c41f9faf323a0c'})
    res.render('form')
})

app.post('/blog',async(req,res)=>{
  
    const newBlog = new blog(req.body)
    
   const c= await newBlog.save()
    console.log(c)
    res.redirect('/blogView')

})
app.get('/blogView',async(req,res)=>{
    const blogs =await blog.find()
    res.render('view',{blogs})
    // console.log(blogs)
    // res.json(blogs)
})
app.put('/blogview/:id',async(req,res)=>{
    
})

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
//.yellow.underline