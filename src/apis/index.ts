import { idCheckRequestDto, signUpRequestDto } from "./dto/request/auth";

import axios, { AxiosError, AxiosResponse } from 'axios';
import { ResponseDto } from "./dto/response";

// variable: URL 상수 //
const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

const AUTH_MODULE_URL = `${API_DOMAIN}/api/v1/auth`;

const ID_CHECK_URL = `${AUTH_MODULE_URL}/id-check`;
const SIGN_UP_URL = `${AUTH_MODULE_URL}/sign-up`;

// function: response 성공 처리 함수 //
const responseSuccessHandler = (response: AxiosResponse<ResponseDto>) => {
    // response.data: Response Body
    const { data } = response;
    return data;
};

// function: response 실패 처리 함수 //
const responseErrorHandler = (error: AxiosError<ResponseDto>) => {
    if (!error.response) return null;
    const { data } = error.response;
    return data;
};

// function: id check API 요청 함수 //
export const idCheckRequest = async (requestBody: idCheckRequestDto) => {
    // axios 사용 - post 요청 / 이 작업의 결과를 기다리지 않는 비동기 함수이기 때문에 .then을 사용
    const responseBody = await axios.post(ID_CHECK_URL, requestBody)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
  return responseBody;
};

// function: sign up API 요청 함수 //
export const SignUpRequestDto = async (requestBody: signUpRequestDto) => {
    const responseBody = await axios.post(SIGN_UP_URL, requestBody)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
    return responseBody;
};