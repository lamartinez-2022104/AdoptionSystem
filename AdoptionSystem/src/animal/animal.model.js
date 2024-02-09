import mongoose from "mongoose";
 
const animalSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        required: true
    },
 
    race:{  
        type: String,
        required: true
    },
   
    age:{
        type: String,
        required: true
    },
 
    gender:{
        type:String,
        required: true
    },
    
    keeper:{
        type: String,
        required: true
    }
})
 
export default mongoose.model('animal',animalSchema)