import { concentraionTest } from "src/types/interfaces";
import ResponseDto from "../response.dto";

// interface: post concentraition response body DTO//
export default interface PostConcentraitionResponseDto extends ResponseDto{ 
  concentrationTests: concentraionTest[];
}