import { setStarWars } from "./starWars";
import { SET_STAR_WARS } from "../constants";

test("get and dispatch starWars from the api server", () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_STAR_WARS);
    expect(action.payload.length).toBeGreaterThan(0);
  }

  setStarWars(mockDispatch);
});
