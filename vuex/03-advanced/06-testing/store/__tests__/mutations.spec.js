import { expect } from "chai";
import { mutations } from "../store";

// destructure assign `mutations`
const { increment } = mutations;
console.log('increment',increment)
describe("mutations", () => {
  it("INCREMENT", () => {
    // mock state
    const state = { count: 0 };
    // apply mutation
    increment(state);
    // assert result
    expect(state.count).to.equal(1);
  });
});
