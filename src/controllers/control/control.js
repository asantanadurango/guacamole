const loginOptions = {
    title: 'Login', stylePath: '123', docTitle: 'LOGIN'
};
export const loginController = (req, res) => {
    res.render('pages/login/login.ejs', loginOptions)
};

const registerOptions = {
    title: 'Register', stylePath: '123', docTitle: 'REGISTER'
};
export const registerController = (req, res) => {
    res.render('pages/register/register.ejs', registerOptions)
};