// type with generics
export interface apiResponse<T> {
  hasError: boolean;
  message: string;
  statusCode: number;
  data: T;
}

export interface AuthResponse {
  accessToken: string;
  emailAddress: string;
  fullName: string;
  userId: string;
}
