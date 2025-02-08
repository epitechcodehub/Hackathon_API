const express = require("express")
const mongoose = require("mongoose")
const url = "mongodb+srv://iyadhossen:sejg23;M§é@hackaton-api.l9pir.mongodb.net/dbase"
const app = express()
const PORT = 8801

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

const AnnouncementScheme = new mongoose.Schema({
  title: String,
  description: String,
  taken: Boolean
})

const UserModel = mongoose.model("users", UserSchema)
const AnnouncementModel = mongoose.model("announcements", AnnouncementScheme)


app.get("/API/getUsers", (req, res) => {
  UserModel.find({}).then(users => {
    res.status(200).send(users)
  }).catch(err => {
    res.status(404).send(err)
  })
})

app.get("/API/getUsers/:name", (req, res) => {
  UserModel.find(req.params).then(users => {
    res.status(200).send(users)
  }).catch(err => {
    res.status(404).send(err)
  })
})

app.post("/API/addUsers", (req, res) => {
  const {name, lastname, mail, age} = req.body
  UserModel.create({name, lastname, mail, age}).then(user => {
    res.status(201).send(user)
  }).catch(err => {
    res.status(400).send(err)
  })
})

app.delete("/API/delUsers/:id", (req, res) => {
  UserModel.findByIdAndDelete(req.params.id).exec().then(doc => {
    if (!doc)
      return res.status(404).send("The document was not found")
    res.status(204).send(doc)
  }).catch(err => {
    res.status(404).send(err)
  })
})

app.get("/API/getAnnouncements", (req, res) => {
  AnnouncementModel.find({}).then(announcements => {
    res.status(200).send(announcements)
  }).catch(err => {
    res.status(404).send(err)
  })
})

app.get("/API/getAnnouncements/:title", (req, res) => {
  AnnouncementModel.find(req.params).then(announcements => {
    res.status(200).send(announcements)
  }).catch(err => {
    res.status(404).send(err)
  })
})

app.post("/API/addAnnouncements", (req, res) => {
  const {title, description, taken} = req.body
  AnnouncementModel.create({title, description, taken}).then(announcement => {
    res.status(201).send(announcement)
  }).catch(err => {
    res.status(400).send(err)
  })
})

app.delete("/API/delAnnouncements/:id", (req, res) => {
  AnnouncementModel.findByIdAndDelete(req.params.id).exec().then(doc => {
    if (!doc)
      return res.status(404).send("The document was not found")
    res.status(204).send(doc)
  }).catch(err => {
    res.status(404).send(err)
  })
})

app.put("/API/modifAnnouncements/:id", (req, res) => {
  var conditions = {_id: req.params.id}
  const taken = req.body
  AnnouncementModel.updateOne(conditions, taken).then(doc => {
    if (!doc)
      return res.status(404).send("The document was not found")
    res.status(200).send(doc)
  }).catch(err => {
    res.status(404).send(err)
  })
})