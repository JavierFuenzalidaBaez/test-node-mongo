import "./config";
import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(process.env.MONGODB_URI);
    console.log(`conectado a: ${db.connection.name} de MONGO-DB`);
  } catch (err) {
    console.error(err);
  }
})();
