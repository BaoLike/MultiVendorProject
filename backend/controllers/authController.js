const Admin = require('../models/Admin');
const { responseReturn } = require('../utils/response');
const bcrypt = require('bcrypt');
const {createToken} = require('../utils/createToken');
const { use } = require('react');

class authController {
    AdminLogin = async (req, res) => {
        const {email, password} = req.body;
        try {
            const adminInfor = await Admin.findOne({email}).select('password');
            if(adminInfor){
                const match = await bcrypt.compare(password, adminInfor.password);
                if (match) {
                    const token = await createToken({
                        id: adminInfor.id,
                        role: adminInfor.role,
                        name: adminInfor.name,
                    })
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7*24*60*60*1000),
                        httpOnly: true,
                        sameSite: 'lax'
                    })
                    responseReturn(res, 200, {token, message: "Login successfully"});
                } else {
                    responseReturn(res, 404, {error: "Email or Password wrong"})
                }
            }
            else{
                responseReturn(res, 404, {error: "Email or Password wrong"})
            }
        } catch (error) {
            responseReturn(res, 500, {error: error.message})
        }
        
    }

    getUser = async(res, req) => {
        const {role, id} = req;
        try{
            if(role === 'admin'){
                const user = await Admin.findById(id);
                responseReturn(res, 200, {userInfor: user});
            }
            else{
                console.log('Seller Infor')
            }
        }
        catch(error){
            console.log(error.message)
        }
        
    }
}

module.exports = new authController()