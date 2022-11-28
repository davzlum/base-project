export class Stack {
  #stack: string[] = [];
  relations = new Map<string, string>();
  constructor() {
    this.relations.set("(", ")");
    this.relations.set("[", "]");
    this.relations.set("{", "}");
  }

  public isEmpty(): boolean {
    return this.#stack.length === 0;
  }

  public stackPush(value: string) {
    this.#stack.push(value);
    return this.#stack;
  }

  public stackPop() {
    this.#stack.pop();
    return this.#stack;
  }

  public stackGet() {
    return this.#stack[this.#stack.length - 1];
  }

  public checkIfPair(value: string) {
    if (value.length % 2 !== 0) {
      return false;
    }
  }

  public checkClosures(value: string) {
    this.checkIfPair(value);
    this.stackPush(value[0]);

    for (let i = 1; i < value.length; i++) {
      if (this.relations.get(this.stackGet()) !== value[i]) {
        this.stackPush(value[i]);
      }
      if (this.relations.get(this.stackGet()) === value[i]) {
        this.stackPop();
      }
    }
    return this.isEmpty();
  }
}
