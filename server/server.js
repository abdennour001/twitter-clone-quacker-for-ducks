const express = require("express");
const cors = require("cors");
const monk = require("monk");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();

// setup middlewares.

app.use(express.json());
app.use(cors());

// connect express to mongo database
const quacks = monk(process.env.MONGODB_URI).get("quacks");

// validation for name and quack
const isValid = string => {
    return string !== "";
};

app.get("/", (req, res) => {
    res.send({ message: "hello world!" });
});

app.post("/quacks", (req, res) => {
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
