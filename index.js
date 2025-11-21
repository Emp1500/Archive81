import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.use(express.static(join(__dirname, "public")));

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


