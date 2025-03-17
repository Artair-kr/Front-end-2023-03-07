import ResponseDto from "../response.dto";

// interface: sign in response body DTO //
export default interface SignInResponseDto extends ResponseDto {
  accessToken: string;
  expiration: number;
}