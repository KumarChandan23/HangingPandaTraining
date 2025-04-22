import mongoose, { mongo } from "mongoose"

const userSchema = new mongoose.Schema({
    username: {type:String, require: true, unique: true},
    email:{type:String, require: true, unique: true},
    password:{type:String, require: true},
    isVarified:{type:Boolean, defaul:false },
    isAdmin:{type:Boolean, default: false}, 
    forgotPasswordToken: String, 
    forgotPasswordTokenExpiry: Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})

const User = mongoose.model.users || mongoose.model("User", userSchema);

export default User;