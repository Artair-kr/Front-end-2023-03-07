import Diary from "../../../../types/interfaces/diaty.interface";
import ResponseDto from "../response.dto";

// interface: get my diary response body DTO //
export default interface GetMyDiaryResponseDto extends ResponseDto {
    diaries: Diary[];
}