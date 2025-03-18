import { Feeling, Weather } from "../aliases";

export default interface Diary {
    writeDate: string;
    title: string;
    weather: Weather;
    feeling: Feeling;
}