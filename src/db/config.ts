import { Student } from "../entities/Student";
import { createConnection } from "typeorm";

export const setupConnection = async () => {
  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Student],
    synchronize: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });

  console.log("Connected to database");
};
