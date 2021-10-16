import app from "..";
import supertest from "supertest";

jest.mock("../../src/db/students", () => {
  const originalMock = jest.requireActual("../../src/db/students");

  const students = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      city: "Belo Horizonte",
      birth: new Date("11/13/1999").toISOString(),
    },
  ];

  return {
    __esModule: true,
    ...originalMock,
    getStudents: jest.fn(() => Promise.resolve(students)),
  };
});

describe("Test student requests", () => {
  it("should return the example student", async () => {
    await supertest(app)
      .get("/students")
      .expect(200)
      .then((res) =>
        expect(res.body).toMatchObject([
          {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            city: "Belo Horizonte",
            birth: new Date("11/13/1999").toISOString(),
          },
        ])
      );
  });

  // it("should create a new student", async () => {
  //   const newStudent = {
  //     name: "John Doe 2",
  //     email: "john.doe.2@example.com",
  //     city: "Belo Horizonte",
  //     birth: new Date("11/13/1999").toISOString(),
  //   };

  //   await supertest(app)
  //     .post("/students")
  //     .send(newStudent)
  //     .then((res) => expect(res.body).toMatchObject({ id: 2, ...newStudent }));
  // });

  // it("should update the first student", async () => {
  //   const newStudent = {
  //     name: "Aylton",
  //   };

  //   await supertest(app)
  //     .put(`/students/${1}`)
  //     .send(newStudent)
  //     .expect(200)
  //     .then((res) => expect(res.body).toBe("ok"));

  //   await supertest(app)
  //     .get("/students")
  //     .expect(200)
  //     .then((res) =>
  //       expect(res.body[0]).toMatchObject({
  //         id: 1,
  //         name: "Aylton",
  //         email: "john.doe@example.com",
  //         city: "Belo Horizonte",
  //         birth: new Date("11/13/1999").toISOString(),
  //       })
  //     );
  // });

  // it("should update the first student", async () => {
  //   const student = {
  //     id: 1,
  //     name: "Aylton",
  //     email: "john.doe@example.com",
  //     city: "Belo Horizonte",
  //     birth: new Date("11/13/1999").toISOString(),
  //   };

  //   await supertest(app)
  //     .delete(`/students/${1}`)
  //     .expect(200)
  //     .then((res) => expect(res.body).toBe("ok"));

  //   await supertest(app)
  //     .get("/students")
  //     .expect(200)
  //     .then((res) => expect(res.body).not.toContain(student));
  // });
});
