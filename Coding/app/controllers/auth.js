const { PrismaClient } = require('@prisma/client');
const {encryptPassword, checkPassword} = require('../../utils/auth');

const prisma = new PrismaClient();

module.exports = {
    authUser: async (email,password, done) => {
        try {
            let isNum = /^\d+$/.test(password);
            if (!isNum) {
                return done(null, false, {message: 'Wrong Password Format'});
            }

            const user = await prisma.user.findUnique({
                where: {email}
            });

            if (!user || !await checkPassword(password, user.password)) {
                return done(null, false, {message: 'Invalid email or password'});                
            }

            return done(null, user);
        } catch (err) {
            return done(null, false, {message: err.message});
        }
    },
    registerForm: async (req,res,next)=>{
        try {
            const {email, password, name, identity_number, phone_number, address} = req.body;
            let isNum = /^\d+$/.test(password);
            if (!isNum) {
                req.flash("error", "Format Password Salah!!");
                return res.redirect('/register');
            }
            const user = await prisma.user.findFirst({
                where: { email }
            });

            if(user){
                req.flash("error", "Email sudah terdaftar!!");
                return res.redirect('/register');
            }

            const createUser = await prisma.user.create({
                data: {
                    email,
                    name,
                    password: await encryptPassword(password),
                    profile: 
                            {
                            create: 
                                {
                                    identity_number,
                                    address,
                                    phone_number
                                }
                            }
                }
            });


            req.flash("success","Berhasil Register!!");
            return res.redirect('/login');

        } catch (e) {
            next(e)
        }
    }

}