const express = require("express");
const cors = require("cors");
const monk = require("monk");
const bcypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const emailValidator = require("email-validator");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();

// setup middlewares.

app.use(express.json());
app.use(cors());

// connect express to mongo database
const db = monk(process.env.MONGODB_URI);
const quacks = db.get("quacks");
const users = db.get("users");

// generate password hash
const generatePassword = async password => {
    const saltRounds = 10;
    const salt = await bcypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
};

// compare passwords
const comparePasswords = async (password, hash) => {
    return await bcypt.compare(password, hash);
};

// sign with jwt
const generateJWT = async (email, password) => {
    return jwt.sign({ email, password }, process.env.JWT_SECRET);
};

// require authentication middleware
const requireAuth = (req, res, next) => {
    if (!req.headers || !req.headers.authorization) {
        return res.status(401).send({ message: "No authorization headers." });
    }

    const token_bearer = req.headers.authorization.split(" ");
    if (token_bearer.length != 2) {
        return res.status(401).send({ message: "Malformed token." });
    }

    const token = token_bearer[1];
    return jwt.verify(token, process.env.JWT_SECRET, (err, encoded) => {
        if (err) {
            return res
                .status(500)
                .send({ auth: false, message: "Failed to authenticate." });
        }
        return next();
    });
};

// register new user
app.post("/auth/", async (req, res) => {
    const { email, password } = req.body;

    // check email if valid
    if (!email || !emailValidator(email)) {
        return res.status(400).send({
            auth: false,
            message: "Email is required or malformed."
        });
    }

    // check password
    if (!password) {
        return res.status(400).send({
            auth: false,
            message: "Password is required."
        });
    }

    // Check if user exists
    user = await users.find({ email });

    if (user) {
        return res
            .status(422)
            .send({ auth: false, message: "User may already exists." });
    }

    // hash the password
    password_hash = await generatePassword(password);

    const newUser = {
        email,
        password_hash
    };

    // save user
    const savedUser = await users.insert(newUser);
    if (savedUser) {
        const jwt = generateJWT(email, password_hash);
        if (jwt) {
            res.status(201).send({ token: jwt, user: newUser });
        } else {
            return res.status(400).send({
                auth: false,
                message: "Error while generating token."
            });
        }
    } else {
        return res
            .status(400)
            .send({ auth: false, message: "Error while saving user." });
    }
});

// sign in user
app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;

    // check email if valid
    if (!email || !emailValidator(email)) {
        return res.status(400).send({
            auth: false,
            message: "Email is required or malformed."
        });
    }

    // check password
    if (!password) {
        return res.status(400).send({
            auth: false,
            message: "Password is required."
        });
    }

    // Check if user exists
    user = await users.find({ email });

    if (!user) {
        return res.status(401).send({ auth: false, message: "Unauthorized." });
    }

    // check that the password matches
    const authValid = await comparePasswords(password, user.password_hash);

    if (!authValid) {
        return res.status(401).send({ auth: false, message: "Unauthorized" });
    }

    // Generate JWT
    const jwt = generateJWT(user.email, user.password_hash);

    res.status(200).send({ auth: true, token: jwt, user: user });
});

// verification
app.get("/auth/verification", requireAuth, (req, res) => {
    return res.status(200).send({
        auth: true,
        message: "Authenticated."
    });
});

// validation for name and quack
const isValid = string => {
    return string !== "";
};

app.get("/", (req, res) => {
    res.send({ message: "hello world!" });
});

app.post("/quacks", requireAuth, (req, res) => {
    const { name, quack } = req.body;
    if (isValid(name) && isValid(quack)) {
        // insert data
        const data = {
            name,
            quack,
            created_at: new Date()
        };
        quacks.insert(data).then(createdQuack => {
            res.status(200).send({
                createdQuack
            });
        });
    } else {
        res.status(422).send({
            message: "You must provide Name and Content! 🌶✨"
        });
    }
});

app.get("/quacks", async (req, res) => {
    const quacksAll = await quacks.find();
    res.status(200).send({
        quacks: quacksAll.reverse()
    });
});

// start server.
app.listen(5000, () => {
    console.log("Listening on http://localhost:5000");
});
