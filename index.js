import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
}); 

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/post1", (req, res) => {
    res.render("post1.ejs");
});

app.get("/post2", (req, res) => {
    res.render("post2.ejs");
});

app.get("/post3", (req, res) => {
    res.render("post3.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


