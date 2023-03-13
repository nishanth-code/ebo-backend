
const blog = require('../models/blogsmodel')
const renderInputForm = (req,res)=>{
   
    res.render('form')
}

const addNewBlog = async(req,res)=>{
  
    const newBlog = new blog(req.body)
    
   const c= await newBlog.save()
    // console.log(c)
    res.redirect('/blogs/View')
}

const viewAllBlogs = async(req,res)=>{
    const blogs =await blog.find()
    res.render('view',{blogs})
    // console.log(blogs)
    // res.json(blogs)
}
const viewBlog = async(req,res)=>{
    const b = await blog.findById(req.params.id) 
    res.render('edit',{b})
}
const editBlog =async(req,res)=>{
    const cblog = {...req.body}
    console.log(cblog)
    const bloge = await blog.findByIdAndUpdate(req.params.id,{...req.body},{returnDocument:'after'})
    res.redirect('/blogs/view')
    
}
const deleteBlog = async(req,res) =>{
    console.log('delete route')
    await blog.findByIdAndDelete(req.params.id)
    res.redirect('/blogs/view')
}
module.exports = {
    renderInputForm,
    addNewBlog,
    viewAllBlogs,
    viewBlog,
    editBlog,
    deleteBlog
}