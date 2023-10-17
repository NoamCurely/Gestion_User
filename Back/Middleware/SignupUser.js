const  User  = require("../Models/UserModel");

checkUsemail = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (user) {
            res.status(400).send({
                error: "email already exists"
            });
            return;
        }
        next();
    });
};

const Verify = {
    checkUsemail: checkUsemail
};

module.exports = Verify;