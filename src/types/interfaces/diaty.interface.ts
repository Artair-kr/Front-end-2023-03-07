import { Feeling, Weather } from "../aliases";

export default interface Diary {
    diaryNumber: string | number;
    writeDate: string;
    title: string;
    weather: Weather;
    feeling: Feeling;
}