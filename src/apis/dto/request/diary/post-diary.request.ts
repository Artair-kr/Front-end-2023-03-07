import { Feeling, Weather } from "../../../../types/aliases";

// interface: post diary request body DTO //
export default interface PostDiaryRequestDto { 
    weather: Weather;
    feeling: Feeling;
    title: string;
    content: string;
}