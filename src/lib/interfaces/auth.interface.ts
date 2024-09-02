export interface IAuthSignInParams {
  email: string;
  password: string;
}

export interface IAuthSignUpParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IAuthRecoverPasswordParams {
  userId: string;
  email: string;
}

export interface IAuthChangePasswordParams {
  userId: string;
  newPassword: string;
}

export interface IAuthTokenDecoded {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  verifiedEmail: boolean;
  iat: number;
  exp: number;
}
