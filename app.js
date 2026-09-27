const express = require('express');
const path = require('path')
const indexRouter=require("./routes/indexRoute");
const app= express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/',indexRouter)
app.use(express.urlencoded({ extended: true }));
app.listen(8080, () => {
	console.log("Server running");
});