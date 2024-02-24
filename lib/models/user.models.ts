import {Schema} from "mongoose";

const userSchema = new Schema({
clerkId: {type:string, required: true, unique:true}
email: {type:string, required: true, unique:true},
userName: {type:string, required: true, unique:true},
firstName: {type:string, required: true},
LastName: {type:string, required: true}
})

const User = model.User || Model("evently", userSchema)

export default User;