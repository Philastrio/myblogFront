export interface SignUpState {
  isSigningUp: boolean;
  isSignedUp: boolean;
  singUpErrorReason?: string;
}

export const SING_UP_REQUEST = "SING_UP_REQUEST";
