import { getConnection } from "typeorm";
import { Student } from "../entities/Student";

const students: Student[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    city: "Belo Horizonte",
    birth: new Date("11/13/1999"),
  },
];

/**
 * Add new student to list
 * @param student New student
 * @returns new student
 */
async function addStudent(student: Student) {
  const newStudent = new Student(student);

  const connection = getConnection().getRepository(Student);

  await connection.save(newStudent);

  return newStudent;
}

/**
 * Returns student list
 * @returns Students
 */
const getStudents = () => getConnection().getRepository(Student).find();

const updateStudent = (id: number, student: Student) => {
  const index = students.findIndex((s) => s.id === id);
  students[index] = { ...students[index], ...student };
  return Promise.resolve();
};

const deleteStudent = (id: number) => {
  const index = students.findIndex((s) => s.id === id);
  students.splice(index, 1);
  return Promise.resolve();
};

export { addStudent, getStudents, updateStudent, deleteStudent };
