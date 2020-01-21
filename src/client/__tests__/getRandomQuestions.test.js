import { getRandomQuestions } from "../util";
import { sampleQuestions } from "../../setupTests";

describe("getRandomQuestions function", () => {
  it("handles incorrect data type", () => {
    expect(getRandomQuestions("test")).toBe("argument should be an array");
    expect(getRandomQuestions(10)).toBe("argument should be an array");
    expect(getRandomQuestions({})).toBe("argument should be an array");
  });

  it("return the same array if arr.length < 2", () => {
    let arr = [{}];
    let returnedArr = getRandomQuestions(arr);
    expect(arr).toBe(returnedArr);
  });

  it("returns 5 random questions", () => {
    let returnedArr = getRandomQuestions(sampleQuestions);
    expect(returnedArr.length).toBe(5);
  });
});
