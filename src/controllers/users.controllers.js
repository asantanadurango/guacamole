import { UserModel } from '../models/userModel.js'
export const register = async (req, res) => {
    console.log(req.body);
    let {
        name,
        surname,
        identification,
        email,
        address,
        phone,
        
    } = req.body

    name = name.toLowerCase()
    surname = surname.toLowerCase()
    email = email.toLowerCase()
    address = address.toLowerCase()
    
    new UserModel({ name, surname, identification, email, address, phone,}).save((error, data) => {
        if (error) {
            console.log(error);
            return res.json({error:error})
        }
        res.json({res:data})
    })
};



export const users = async (req, res) => {
    res.json({users:'users'})
};