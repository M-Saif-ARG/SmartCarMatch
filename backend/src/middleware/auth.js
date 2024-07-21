// const jwt = require("jsonwebtoken");
// const Register = require("../models/registers");

// const auth = async (req, res, next) => {
//     try {
//         const token = req.cookies.jwt;

//         if (!token) {
//             throw new Error("Authentication failed!");
//         }

//         const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
//         const user = await Register.findOne({ _id: verifyUser._id, tokens: { $elemMatch: { token: token } } });

//         if (!user) {
//             throw new Error("User not found!");
//         }

//         req.token = token;
//         req.user = user;
//         req.verifyUser = verifyUser;

//         next();
//     } catch (err) {
//         res.status(401).send(err.message);
//     }
// };

// module.exports = auth;

const jwt = require("jsonwebtoken");
const Register = require("../models/registers");

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            throw new Error("Authentication failed!");
        }

        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        const user = await Register.findOne({ _id: verifyUser._id, tokens: { $elemMatch: { token: token } } });

        if (!user) {
            throw new Error("User not found!");
        }

        req.token = token;
        req.user = user;
        req.verifyUser = verifyUser;

        next();
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};

module.exports = auth;
