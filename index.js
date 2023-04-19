const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./config/router");
const path = require("path");
const DIR = path.resolve();
const staticPublicPath = path.join(DIR, "public");
const viewsPath = path.join(DIR, "views");
const app = express();
const port = 3000
const dotenv = require("dotenv");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPublicPath));
app.set("views", viewsPath);
app.set("view engine", "ejs");
app.use(router);

//error 404
// app.use((req, res) => {
//   res.render("pages/notFound404");
// });

const { Client } = require("pg");

const client = new Client();
client.connect();

module.exports = app;

dotenv.config();
// app.use(express.static(__dirname + '/public'))
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
// //   res.send('Hello World!')
//     res.render('index');
// })

// app.get('/create', (req, res) => {
//   //   res.send('Hello World!')
//       res.render('./pages/createCar');
//   })

// app.get('/updateCar', (req, res) => {
//   //   res.send('Hello World!')
//       res.render('./pages/UpdateCar');
//   })

//   const { Client } = require("pg");

//   const client = new Client();
//   client.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})