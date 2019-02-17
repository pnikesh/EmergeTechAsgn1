let express = require("express");
let router = express.Router();

let messageModel = require("../models/message");

//GET - to read msgs

router.get("/", (req, res, next) => {
  messageModel.find((err, messageList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("messages/messages", {
        title: "User From Messages",
        messages: messageList
      });
    }
  });
});

// POST = to add msgs
router.post("/", (req, res, next) => {
  //Creating a new Modle object
  let newMessage = messageModel({
    "firstname": req.body.fname,
    "lastname": req.body.lname,
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
