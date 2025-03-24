export default interface ConcentraitonTest { 
  sequence: number;
  measurementScore: number;
  errorCount: number;
  testDate: string;
  scoreGap: number | null;
  errorGap: number | null;
}