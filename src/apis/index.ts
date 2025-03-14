import { idCheckRequestDto, signUpRequestDto } from "./dto/request/auth";

import axios, { AxiosError, AxiosResponse } from 'axios';
import { ResponseDto } from "./dto/response";


// function: response 성공 처리 함수 //
const responseSuccessHandler = (response: AxiosResponse<any, any>) => {
    // response.data: Response Body
    const { data } = response;
    return data as ResponseDto;
};

// function: response 실패 처리 함수 //
const responseErrorHandler = (error: AxiosError) => {
    if (!error.response) return null;
    const { data } = error.response;
    return data as ResponseDto;
};

// function: id check API 요청 함수 //
export const idCheckRequest = async (requestBody: idCheckRequestDto) => {
    // axios 사용 - post 요청 / 이 작업의 결과를 기다리지 않는 비동기 함수이기 때문에 .then을 사용
    const responseBody = await axios.post('http://127.0.0.1:4000/api/v1/auth/id-check', requestBody)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
  return responseBody;
};

// function: sign up API 요청 함수 //
export const SignUpRequestDto = async (requestBody: signUpRequestDto) => {
    const responseBody = await axios.post('http://127.0.0.1:4000/api/v1/auth/sign-up', requestBody)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
    return responseBody;
};