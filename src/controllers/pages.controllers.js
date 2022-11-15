import { UserModel } from '../models/userModel.js';
import { ProductModel } from '../models/productModel.js'

const indexOptions = {
    title: 'Index', stylePath: '123', docTitle: 'Index',
    products: {
        'Guacamole Natural': [
            { peso: '250', ref: 'GN-250' },
            { peso: '500', ref: 'GN-500' }
        ],
        'Guacamole Picante': [
            { peso: '250', ref: 'GP-250' },
            { peso: '500', ref: 'GP-500' }
        ],
        'Hummus': [
            { peso: '250', ref: 'H-250' },
            { peso: '500', ref: 'H-500' }
        ],
    }
};

export const index = (req, res) => {
    res.render('pages/index/index.ejs', indexOptions)
};

export const registerProducts = (req, res) => {
    res.render('pages/products/register.ejs', {title:'pages/products/register.ejs', docTitle:'Register'})
};

export const products = async (req, res) => {

    try {
        const products = await ProductModel.find({}).select({ 'name': 1, 'description':1, 'presentations':1, '_id': 0 }).lean()
        console.log(products);
       
        res.render('pages/products/products.ejs', { products, title:'pages/products/products.ejs', docTitle:'Products'})
        
    } catch (error) {
        console.log(error);
        return res.json({error:error})
    }

};

export const registerUsers = (req, res) => {
    res.render('pages/users/register.ejs', {title:'pages/users/register.ejs', docTitle:'Register'})
};

export const users = async (req, res) => {

    try {
        const users = await UserModel.find({}).select({ 'name': 1, 'email':1, '_id': 0 }).lean()
        
        return res.render('pages/users/users.ejs', { users, title:'pages/users/users.ejs', docTitle:'Users'})
        
    } catch (error) {
        console.log(error);
        return res.json({error:error})
    }
};
