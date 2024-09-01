export interface IUserRole {
  id: string;
  userLoginId: string;
  roleId: string;
  active: boolean;
  assignedAt: Date;
  revokedAt?: Date;
}
