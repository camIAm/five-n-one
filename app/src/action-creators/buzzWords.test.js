import { setBuzzWords } from "./buzzWords";
import { SET_BUZZ_WORDS } from "../constants";

test("get and dispatch buzzWords from the api server", () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_BUZZ_WORDS);
    expect(action.payload.length).toBeGreaterThan(0);
  }

  setBuzzWords(mockDispatch);
});
