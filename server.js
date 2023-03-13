const express = require('express')
const app = express();
const methodOverride = require('method-override')
const path = require('path')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const blog = require('./models/blogsmodel')
const connectDB = require('./config/db');
app.set('views',path.join(__dirname,'./views'))
const PORT =5000 ;
// process.env.PORT;


connectDB();
app.use(methodOverride('_method'))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine','ejs')
app.engine('ejs',ejsMate)
app.get('/',(req,res)=>{
   
    res.render('form')
})
app.post('/blog',async(req,res)=>{
  
    const newBlog = new blog(req.body)
    
   const c= await newBlog.save()
    // console.log(c)
    res.redirect('/blogView')
})
app.get('/blogView',async(req,res)=>{
    const blogs =await blog.find()
    res.render('view',{blogs})
    // console.log(blogs)
    // res.json(blogs)
})
app.get('/blogview/:id', async(req,res)=>{
    const b = await blog.findById(req.params.id) 
    res.render('edit',{b})
})
app.put('/blogview/:id',async(req,res)=>{
    const cblog = {...req.body}
    console.log(cblog)
    const bloge = await blog.findByIdAndUpdate(req.params.id,{...req.body},{returnDocument:'after'})
    res.redirect('/blogView')
    
})

app.post('/blogview/delete/:id', async(req,res) =>{
    console.log('delete route')
    await blog.findByIdAndDelete(req.params.id)
    res.redirect('/blogview')
})

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
//.yellow.underline