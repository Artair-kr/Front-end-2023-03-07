import ConcentraitonTest from "src/types/interfaces/concentration-test.interface";
import ResponseDto from "../response.dto";

// interfac: get recently concentration response body DTO //
export default interface GetRecentlyConcentrationResponseDto extends ResponseDto{ 
  concentrationTests: ConcentraitonTest[];
}