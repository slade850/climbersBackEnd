const userServices = require('./service');

const userController = {
register: (req, res) => {
    userServices
        .register(req.body)
        .then((result) => res.status(result.status).send({message: result.message}))
        .catch((err) => res.status(err.status).send({ message: err.message }));
    },
login: (req, res) => {
    userServices
        .login(req.body)
        .then((result) => {
        let { password, ...user } = result.user;
        res.cookie('token', { access_token: result.token }, { maxAge: 86400000, httpOnly: true, sameSite: true })
        res.status(result.status).send({user: user , message: "you are logged in"})
        })
        .catch((err) => res.status(err.status).send(err.message));
    },
getById: (req, res) => {
    userServices.getById(req.user.id)
        .then((result) => res.status(result.status).send({message: result.message, user: result.user}))
        .catch((err) => res.status(err.status).send(err.message));
    },
};

module.exports = userController;