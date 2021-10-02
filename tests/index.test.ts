function sum(a: number, b: number) {
  return a + b;
}

describe("Aylton base test suite", () => {
  it("should return 4", () => {
    const response = sum(2, 2);
    expect(response).toBe(4);
  });
  it("should return 5", () => {
    const response = sum(2, 3);
    expect(response).toBe(5);
  });
});
