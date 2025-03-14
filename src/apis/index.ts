import { idCheckRequestDto } from "./dto/request/auth";

import axios from 'axios';

// function: id check API 요청 함수 //
export const idCheckRequest = async  (requestBody: idCheckRequestDto) => {
    // axios 사용 - post 요청 / 이 작업의 결과를 기다리지 않는 비동기 함수이기 때문에 .then을 사용
    const responseBody = axios.post('http://127.0.0.1:4000/api/v1/auth/id-check', requestBody)
        .then(response => {
            // response.data: Response Body 데이터
            const { data } = response;
            return data;
        })
        .catch(error => {
            const { data } = error.response
            return data;
        });
    return responseBody;
};