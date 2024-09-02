export interface ICustomResponse<T> {
  code: number;
  data: T | undefined;
  error: string | undefined;
}
