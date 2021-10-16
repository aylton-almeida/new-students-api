import { celebrate, Joi } from "celebrate";
import express from "express";
import { StudentsController } from "./controllers/studentController";
import { StudentSchema, UpdateStudentSchema } from "./entities/Student";

const routes = express.Router();

const studentsController = new StudentsController();

routes.get("/ping", (_, res) => res.status(200).json("Hello World"));

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
routes.delete("/students/:studentId", studentsController.delete);

export default routes;
