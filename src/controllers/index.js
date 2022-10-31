// Control Controllers
import { loginController, registerController } from './control/control.js'

// Product Controllers
import { createProductController } from './products/createProductController.js';

const indexOptions = {
    title: 'Index', stylePath: '123', docTitle: 'INDEX',
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
const indexController = (req, res) => {
    res.render('pages/index/index.ejs', indexOptions)
};



export {
    indexController,
    loginController,
    registerController,
    createProductController
}