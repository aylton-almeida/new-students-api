import { celebrate, Joi } from "celebrate";
import express, { response } from "express";
import { StudentsController } from "./controllers/studentController";
import { StudentSchema, UpdateStudentSchema } from "./types/Student";

const routes = express.Router();

const studentsController = new StudentsController();

routes.get("/ping", (_, res) => res.json("pong"));

routes.get("/students", studentsController.get);
routes.post(
  "/students",
  celebrate({ body: Joi.object().keys(StudentSchema) }),
  studentsController.create
);
routes.put(
  "/students/:studentId",
  celebrate({
    params: Joi.object().keys({ studentId: Joi.number().required() }),
    body: Joi.object().keys(UpdateStudentSchema),
  }),
  studentsController.update
);
//? Why not add an update, delete and get one routes/

export default routes;
