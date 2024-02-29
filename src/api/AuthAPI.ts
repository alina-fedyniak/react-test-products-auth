import { httpClient, ApiResponse } from '../utils';
import {
  AuthEndpoints,
  IAuthResponse,
  ILoginDTO
} from '../models/auth.model';

class AuthAPI {
  static login(data: ILoginDTO): ApiResponse<IAuthResponse> {
    return httpClient.post<IAuthResponse>(AuthEndpoints.LOGIN, data);
  }
}
export default AuthAPI;
