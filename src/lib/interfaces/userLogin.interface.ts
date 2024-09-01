export interface IUserLogin {
  id: string;
  userId: string;
  email: string;
  password: string;
  verifiedEmail: boolean;
  lastLogin: Date;
  createdAt: Date;
  passwordChangedAt?: Date;
  failedLoginAttempts: number;
  lockUntil?: Date;
}
