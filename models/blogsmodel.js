const mongoose = require('mongoose')
var blog_schema = new mongoose.Schema({
    blogTitle:{
        type:String
    },
    blog:{
        type:String
    },
    blogPostedBy:{
        type:String
    },
    
    headerImg:{
        type:String
    },
    contentImg:[String]
});
const blogModel = mongoose.model('ebo_blog',blog_schema)
module.exports = blogModel;
console.log('blog schema created')