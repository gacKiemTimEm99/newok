const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphdbs = require("express-handlebars");

const route = require("./routes");
const data = require("./config/data");
var cookieParser = require("cookie-parser");

data.connect();

const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
const port = 3000;
app.use(morgan("combined"));
app.engine("handlebars", exphdbs());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/resources/views"));

route(app);

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
