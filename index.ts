import app from "./src/server";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => console.log(`This great server is running on port ${port}`));
