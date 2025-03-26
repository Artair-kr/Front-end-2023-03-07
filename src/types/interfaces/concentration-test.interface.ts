export default interface ConcentraitonTest {
  measurementTime: any; 
  sequence: number;
  measurementScore: number;
  errorCount: number;
  testDate: string;
  scoreGap: number | null;
  errorGap: number | null;
}