import express from "express";
/* const express = require('express') */
/* causa lo mismo que el inport */
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

/* definir donde esta la carpeta views */
app.set("views", path.join(__dirname, "views"));

/* configuracion motor de plantillas handlebars */
const exphbs = create({
  defaultLayout: "main",
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "components_"),
});
app.engine(".hbs", exphbs.engine);

/* configuracion view engine para que utilice handlebars */
app.set("view engine", ".hbs");

/* middlewares */
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

/* rutas */
app.use(indexRoutes);

export default app;
