const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const mongoose = require("mongoose")

const app = express()

app.use(cors())
app.use(express.json())  // middleware

mongoose.connect("mongodb+srv://akilajayasurya:akila@cluster0.twszupp.mongodb.net/passkey?retryWrites=true&w=majority&appName=Cluster0")    //mongoose.connect(process.env.MONGO_URI) 
.then(function () {
    console.log("connected to db")
  }).catch(function () {
    console.log("Failed to connect db")
  })

const credentials = mongoose.model("credential", {}, "bulkmail")  //bulkmail

app.post("/sendemail", function (req, res) {

  var msg = req.body.msg;
  var email = req.body.emailList;
 
  credentials.find().then(function (data) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: data[0].toJSON().user,
        pass: data[0].toJSON().pass,
      },
    })

    new Promise(async function (resolve, reject) {
      try {
        for (var i = 0; i < email.length; i++) {
          await transporter.sendMail({
            from: "akilajayasurya109@gmail.com",
            to: email[i],
            subject: "A Message from BulkMail App",
            text: msg
          })
          console.log("Email sent to:" + email[i])
        }
        resolve("Success")
      } catch (error) {
        reject("Failed")
      }
    }).then(function () {
      res.send(true)
    }).catch(function (err) {
      res.send(false)
    })
  }).catch(function (error) {
    console.log(error)
  })
})


app.listen(5000, function () {
  console.log("server started...")
})