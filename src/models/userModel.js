import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    identification:{
        type: Number,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    
}, {_id:false});


export const UserModel = mongoose.model('users', UserSchema)