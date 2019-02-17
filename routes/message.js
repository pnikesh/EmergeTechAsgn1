/*
 routes/message.js
 Nikesh Patel
 300970071
Feb 16, 2019 */
let express = require("express");
let router = express.Router();

let messageModel = require("../models/message");

//GET - to read msgs
router.get("/", (req, res, next) => {
  messageModel.find((err, messageList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("../views/messages/messages", {
        title: "Messages from Users",
        messageList: messageList
      });
    }
  });
});

// POST - to add msgs
router.post("/", (req, res, next) => {
  console.log("dsfdsf");
  let newMessage = messageModel({
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
    "email": req.body.email,
    "num": req.body.num,
    "subject": req.body.subject
  });

  messageModel.create(newMessage, (err, messageModel) => {
    console.log(messageModel);
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/");
    }
  });
});

//GET - to delete msgs
router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;

  messageModel.remove({ _id: id }, (err, contactModel) => {
    if (err) {
      res.end(err);
    } else {
      res.redirect("/message");
    }
  });
});

module.exports = router;
