import app from "./src/server";
import dotenv from "dotenv";
import "reflect-metadata";
import { setupConnection } from "./src/db/config";

dotenv.config();

const port = process.env.PORT;

app.listen(port, async () => {
  await setupConnection();

  console.log(`This great server is running on port ${port}`);
});
