const { type } = require('@testing-library/user-event/dist/type');
const mongoose=require('mongoose');

const NotesSchema=new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        tag:{
            type:String,
            default:"General"
        },
        date:{
            type:Date,
            default:Date.now
        }
    },{timestamps:true});


module.exports=mongoose.model("Notes",NotesSchema);