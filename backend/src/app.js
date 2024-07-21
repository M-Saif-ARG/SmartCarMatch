require('dotenv').config();
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');

require("./db/conn");
const Register = require("./models/registers")

const port = process.env.PORT || 8000;

const cors = require("cors");
app.use(cors());

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Example route to serve home page
app.get("/", (req, res) => {
    
});

app.get("/home", (req, res) => {
    console.log("Home");
    res.send(req.verifyUser);
});

// register 
app.post("/register", async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body;

        // Check if passwords match
        if (password !== confirmpassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        const userExist = await Register.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const registerUser = new Register({ username, email, password });

        const token = await registerUser.generateAuthToken();

        // Set cookie with JWT token
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 300000),
            httpOnly: true,
        });

        await registerUser.save();

        res.status(201).json({ msg: "Signup successful", token }); // Return JSON response with token
    } catch (err) {
        console.error(err);
        res.status(400).json({ msg: "Server error" });
    }
});


// login 
app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({ email: email });
        if (!useremail) {
            return res.status(400).json({ msg: "email do not exists" });
        }

        const isMatch = await bcrypt.compare(password, useremail.password);
        if (isMatch) {
            const token = await useremail.generateAuthToken();
            console.log("the token part " + token);

            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 50000),
                httpOnly: true,
                // secure:true
            });

            res.status(200).json({ msg: "Login successful", token }); // Return JSON response with token
        } else {
            res.status(400).json({ msg: "Invalid Username or Password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

// logout

// app.get('/logout', async (req, res) => {
//     try {
//         req.user.tokens = []; 
//         await req.user.save();

//         res.clearCookie('jwt', {
//             httpOnly: true,
//             sameSite: 'none',
//             secure: true // Set secure to true if using HTTPS
//         });

//         res.status(200).send({ msg: 'Logout successful' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// });



app.listen(port, () => {
    console.log(`server started at port ${port}.`);
});