const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

//test mogodb
//test connextion mongodb
mongoose.connect("mongodb://localhost:27017/maBase", {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(async () => {
        console.log("Connecté à MongoDB");
        const root = new User({
            username: "root",
            password: "password",
            email: "troll@epitech.eu",
            isAdmin: true
        });
    })
    .catch((err) => {console.error('Erreur de connexion', err);});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    isAdmin: { type: Boolean, default: false}
});
const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
    const {username, password, email} = req.body;
    if (!username || !password || !email)
        return res.status(400).send("Tous les champ sont requis");
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({username, hashPassword, email});
    newUser.save()
        .then(user => res.status(201).send("Utilisateur créé avec succès !"))
        .catch(err => res.status(500).send("Erreur lors de la création de l\'utilisateur : " + err));
});

app.get("/register", async (req, res) => {
    res.render("register");
 });

app.get("/users", async (req, res) => {
   const users = await User.find();
   res.send(users);
});

const PORT = 4444;
app.listen(PORT, () => {
   console.log("Serveur en écoute sur http://localhost:${PORT}")
});