import { UserModel } from '../models/userModel.js'
export const register = async (req, res) => {
    
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
    identification = identification.toLowerCase()
    email = email.toLowerCase()
    address = address.toLowerCase()
    phone = phone.toLowerCase()
    
    new UserModel({ name, surname, identification, email, address, phone,}).save((error, data) => {
        if (error) return res.json({error:error})
        res.json({res:data})
    })
};



export const users = async (req, res) => {
    res.json({users:'users'})
};