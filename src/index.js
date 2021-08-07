const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphdbs = require("express-handlebars");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const route = require("./routes");
const data = require("./config/data");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

data.connect();

const app = express();

// Extended : https://swagger.io/specification/#infoObject

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());
const port = 3000;
app.use(morgan("combined"));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

route(app);

app.listen(process.env.PORT || 4000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
