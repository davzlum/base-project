import { Stack } from "./data-structure";

describe("Given a Stack data structure", () => {
  let stack: Stack;
  beforeEach(() => {
    stack = new Stack();
  });
  test("a class Stack must be declared", () => {
    expect(stack).toBeDefined();
  });
  test("When the Stack is created then it should be empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });
  test("When I introduce an element to the stack, then the element should be in the stack", () => {
    expect(stack.stackPush("hola")).toEqual(["hola"]);
  });
  test("When I remove an element from the stack, it should remove the last one", () => {
    stack.stackPush("1");
    stack.stackPush("2");
    expect(stack.stackPop()).toEqual(["1"]);
  });
  test("When the stack has elements, then it should return the last element introduced", () => {
    stack.stackPush("A");
    stack.stackPush("B");
    stack.stackPush("C");
    expect(stack.stackGet()).toEqual("C");
  });
  test.each`
    string         | expected
    ${"()"}        | ${true}
    ${"[({[]})]"}  | ${true}
    ${"[{}"}       | ${false}
    ${"([)]"}      | ${false}
    ${"()()"}      | ${true}
    ${"[(({}))}]"} | ${false}
  `(
    "When I have check the closures of $string, then it should return $expected",
    ({ string, expected }) => {
      expect(stack.checkClosures(string)).toBe(expected);
    }
  );
});
