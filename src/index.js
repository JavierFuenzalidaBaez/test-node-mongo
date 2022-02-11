import "./config";
import app from "./app";
import "./database";

app.listen(process.env.PORT || 3000);
console.log("corriendo en el puerto", process.env.PORT);
