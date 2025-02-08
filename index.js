const express = require("express")
const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/dbase"
const app = express()
const PORT = 8080

app.use(express.json())

mongoose.connect(url).then(() => {
  console.log(`Successfully connected to ${url}`)
  app.listen(PORT, () => {
      console.log(`Currently listening on http://localhost:${PORT}`)
    })
}).catch(err => {
  console.log(err)
})

const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  mail: String,
  age: Number
})

const UserModel = mongoose.model("users", UserSchema)

app.get("/API/getUsers", (req, res) => {
  UserModel.find({}).then(users => {
    res.status(200).send(users)
  }).catch(err => {
    res.status(404).send(err)
  })
})

app.get("/API/getUsers/:name", (req, res) => {
  const user_info = UserModel.find(req.params).then(users => {
    res.status(200).send(users)
  }).catch(err => {
    res.status(404).send(err)
  })
})

app.post("/API/addUsers", (req, res) => {
  const {name, lastname, mail, age} = req.body
  UserModel.create({name, lastname, mail, age}).then(user => {
    res.status(201).send(`New user has been successfully created:\n${user}`)
  }).catch(err => {
    res.status(400).send(err)
  })
})

app.delete("/API/delUsers/:id", (req, res) => {
  UserModel.findByIdAndDelete(req.params.id).exec().then(doc => {
    if (!doc)
      return res.status(404).send("The document was not found")
    res.status(204).send("The document was found")
  }).catch(err => {
    res.status(500).send(err)
  })
})