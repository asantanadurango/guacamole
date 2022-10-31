import mongoose from 'mongoose';
const { Schema } = mongoose;

const PresentationSchema = new Schema({
    price: Number,
    weight: String,
    ref:String

});

const ProductSchema = new Schema({
    name: String,
    presentations: [PresentationSchema],

});

export const ProductModel = mongoose.model('products', ProductSchema)