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

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
  phoneNumber: string;
}
