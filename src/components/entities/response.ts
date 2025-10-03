import { AxiosError, type AxiosResponse } from "axios";

interface Success {
  message: string;
  stack: string;
}

interface Token {
  message: string;
  token: string;
}

interface ExpertLogin extends Token {
  firstLogin: boolean;
}

interface Error {
  error: string;
  stack: string;
}

interface SuccessCall {
  data: {
    token: string;
    channel: string;
    userId: string;
    expertId: string;
    endTime: string;
    _id: string;
  };
  message: string;
}

export type SuccessResponse = AxiosResponse<Success>;
export type ErrorResponse = AxiosError<Error>;
export type ExpertLoginResponse = AxiosResponse<ExpertLogin>;
export type TokenResponse = AxiosResponse<Token>;
export type CallCreationResponse = AxiosResponse<SuccessCall>;
