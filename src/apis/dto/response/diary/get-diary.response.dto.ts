import { Feeling, Weather } from "../../../../types/aliases";
import ResponseDto from "../response.dto";

// interface: get diary body DTO //
export default interface GetDiaryResponseDto extends ResponseDto {
    writeDate: string;
    weather: Weather;
    feeling: Feeling;
    title: string;
    content: string;
}