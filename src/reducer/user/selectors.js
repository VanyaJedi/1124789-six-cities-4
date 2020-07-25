import NameSpace from "../name-space.js";
import {createUser} from "../../adapters/user.js";

const NAME_SPACE = NameSpace.USER;

export const getUser = (state) => {
  return createUser(state[NAME_SPACE].user);
};
