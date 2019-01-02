import * as bodyParser from "body-parser";
import * as compression from "compression"; // compresses requests
import * as express from "express";

import * as apiController from "./controllers/api";
import * as homeController from "./controllers/home";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/api", apiController.getApi);

export { app };
