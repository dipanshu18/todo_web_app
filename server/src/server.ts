import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { userRoutes } from "./routes/user.route";
import { todoRoutes } from "./routes/todos.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log("server started on port", port);
});
