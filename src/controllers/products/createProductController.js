import { ProductModel } from '../../models/productModel.js'
export const createProductController = async (req, res) => {
    try {
        const message = await ProductModel.create({
            name: 'Guacamole Natural',
            presentations: [
                {
                    price: 100,
                    weight: '250',
                    ref:'GN'
                },
                {
                    price: 200,
                    weight: '500',
                    ref:'GN'
                }
            ]
        })
        res.send(message)
    } catch (error) {
        res.send(error)
    }
}