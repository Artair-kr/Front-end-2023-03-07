import ResponseDto from "../response.dto";

// interface: get sign in user response body DTO //
export default interface GetSignInUserResponseDto extends ResponseDto{ 
  userId: string;
  name: string;
  profileImage: string | null;
  address: string;
  detailAddress: string | null;
  gender: string | null;
  age: number | null;
}