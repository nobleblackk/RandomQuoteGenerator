// Node-Core Moudules
const path = require("path");

// NPM Modules
const express = require("express");
const hbs = require("hbs");
const stringSimilarity = require("string-similarity");
const request = require("request");
const fetch = require("node-fetch");
const { get } = require("request");

// Starting WebServer
const app = express();

const port = process.env.PORT || 3000;

// Static Directory Path
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve, Firstly static pages will be rendered if any,bcoz it comes first in order, as we put here on the top before handlebars(dynamic web pages)
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Random Quotes",
    name: "Abhishek Sharma",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Abhishek Sharma",
    // footer: "About Desk",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Abhishek Sharma",
    helpText: "The Source Code For This Application can be accessed at: ",
    // footer: "Help Desk",
  });
});

// const getData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     // console.log(json);
//   } catch (error) {
//     error;
//   }
// };

app.get("/quote", (req, res) => {
  if (!req.query.rating) {
    return res.send({
      en: "You must provide a valid Rating",
      author: "None",
    });
  }

  // res.send({
  //   en: req.query.prev,
  //   rating: req.query.rating,
  // });
});

app.listen(port, () => {
  console.log("Started");
});
