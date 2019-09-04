const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.get("/", (req, res) => {
    res.send("hello I'm using middleware")
})

app.listen("3000")