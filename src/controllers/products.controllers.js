import { ProductModel } from '../models/productModel.js'
export const register = async (req, res) => {
    
    let {
        name,
        description,
        presentations,
    } = req.body

    name = name.toLowerCase()
    description = description.toLowerCase()
    presentations = presentations.map(({price, weight, ref}) => {
        return {price: price.toLowerCase(), weight: weight.toLowerCase(), ref: ref.toLowerCase()}
    })
    
    new ProductModel({ name, description, presentations }).save((error, data) => {
        if (error) return res.json({error:error})
        res.json({res:data})
    })
};

export const products = async (req, res) => {
    res.json({products:'products'})
};