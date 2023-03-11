const mongoose = require('mongoose')
var blog_schema = new mongoose.Schema({
    blogTitle:{
        type:string
    },
    blog:
    {
        type:String
    },
    blogPostedBy:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    img_src:{
        type:String
    }
});
const blogModel = mongoose('blog',blog_schema)
module.exports = blogModel;
console.log('blog schema created')