import { Feeling, Weather } from "../../../../types/aliases";

// interface patch diary request body DTO //
export default interface PatchDiaryRequestDto { 
    weather: Weather;
    feeling: Feeling;
    title: string;
    content: string;
}