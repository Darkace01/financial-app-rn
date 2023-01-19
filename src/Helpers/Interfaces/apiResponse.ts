// type with generics
export interface apiResponse<T> {
  hasError: boolean;
  message: string;
  statusCode: number;
  data: T;
}
