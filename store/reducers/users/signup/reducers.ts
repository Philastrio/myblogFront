import { SignUpState, SING_UP_REQUEST } from "./types";
import produce from "immer";

const initialState: SignUpState = {
  isSigningUp: false,
  isSignedUp: false,
  singUpErrorReason: ""
};

const signupReducers = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SING_UP_REQUEST: {
        draft.isSigningUp = true;
        draft.singUpErrorReason = "";
        break;
      }
    }
  });
};

export default signupReducers;
