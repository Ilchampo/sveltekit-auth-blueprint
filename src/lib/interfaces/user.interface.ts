export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserCreateArgs {
  firstName: string;
  lastName: string;
}

export interface IUserUpdateArgs {
  id: string;
  firstName: string;
  lastName: string;
}
