import mongoose from 'mongoose';
const { Schema } = mongoose;

const PresentationSchema = new Schema({
    price: {
        type: Number,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    ref:{
        type: String,
        required: false,
    },
    
}, {_id:false});

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    description:String,
    presentations: [
       PresentationSchema
    ],
}, {
    versionKey:false
});

export const ProductModel = mongoose.model('products', ProductSchema);
