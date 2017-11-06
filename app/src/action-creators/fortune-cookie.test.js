import { setCookie } from "./fortune-cookie";
import { SET_COOKIE } from "../constants";

test("get and dispatch starWars from the api server", () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_COOKIE);
    expect(action.payload.length).toBeGreaterThan(0);
  }

  setCookie(mockDispatch);
});
