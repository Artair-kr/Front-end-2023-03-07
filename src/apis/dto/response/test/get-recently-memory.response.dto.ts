import MemoryTest from "src/types/interfaces/memory-test.interface";
import ResponseDto from "../response.dto";

// interfac: get recently memory response body DTO //
export default interface GetRecentlyMemoryResponseDto extends ResponseDto{ 
  memoryTests: MemoryTest[];
}