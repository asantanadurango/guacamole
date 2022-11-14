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

export const products = (req, res) => {
    res.render('pages/products/products.ejs', {title:'pages/products/products.ejs', docTitle:'Products'})
};

export const registerUsers = (req, res) => {
    res.render('pages/users/register.ejs', {title:'pages/users/register.ejs', docTitle:'Register'})
};

export const users = (req, res) => {
    res.render('pages/users/users.ejs', {title:'pages/users/users.ejs', docTitle:'Users'})
};
