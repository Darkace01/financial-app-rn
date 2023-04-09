import {
  LOGIN_OR_REGISTER_WITH_GOOGLE,
  LOGIN_URL,
  REGISTER_URL,
  REQUEST_EMAIL_CONFIRMATION_CODE,
  REQUEST_PASSWORD_RESET_URL,
  VERIFY_EMAIL_CONFIRMATION_CODE,
  CHANGE_PASSWORD
} from '../../constants/apiUrls';
import {
  AuthResponse,
  EmailConfirmationPayload,
  LoginPayload,
  PasswordResetPayload,
  RegisterPayload,
  ResetPasswordProfilePayload
} from '../Interfaces/apiResponse';

import appAxios from '../AxiosInterceptor';

export const login = async (payload: LoginPayload) => {
  try {
    const response = await appAxios.post(LOGIN_URL, payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const register = async (payload: RegisterPayload) => {
  try {
    const response = await appAxios.post(REGISTER_URL, payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const requestPasswordReset = async (email: string) => {
  try {
    const response = await appAxios.post(REQUEST_PASSWORD_RESET_URL, {
      email,
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const resetPassword = async (payload: PasswordResetPayload) => {
  try {
    const response = await appAxios.post(REQUEST_PASSWORD_RESET_URL, payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const requestEmailConfirmationCode = async (username: string) => {
  try {
    const response = await appAxios.post(REQUEST_EMAIL_CONFIRMATION_CODE, {
      username,
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const verifyEmailConfirmationCode = async (
  payload: EmailConfirmationPayload
) => {
  try {
    const response = await appAxios.post(
      VERIFY_EMAIL_CONFIRMATION_CODE,
      payload
    );
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const loginOrRegisterWithGoogle = async (idToken: string) => {
  try {
    const response = await appAxios.post(LOGIN_OR_REGISTER_WITH_GOOGLE, {
      token: idToken,
    });
    return response.data;
  } catch (error) {
    if (error?.response?.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
};

export const changePassword = async (payload: ResetPasswordProfilePayload) => {
  try {
    const response = await appAxios.post(CHANGE_PASSWORD, payload)
    return response.data
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('Internal server error');
    } else {
      throw JSON.stringify(error);
    }
  }
}
