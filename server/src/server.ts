import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRoutes } from "./routes/user.route";
import { todoRoutes } from "./routes/todos.route";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log("server started on port", port);
});
