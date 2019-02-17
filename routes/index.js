/*
 routes/index.js
 Nikesh Patel
 300970071
Feb 16, 2019 */

let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Home" });
});

router.get("/about", (req, res, next) => {
  res.render("about", { title: "About Me" });
});

router.get("/contact", (req, res, next) => {
  res.render("contact", { title: "Contact Me" });
});
router.get("/projects", (req, res, next) => {
  res.render("project", { title: "Projects" });
});

router.get("/services", (req, res, next) => {
  res.render("service", { title: "Services" });
});

module.exports = router;
