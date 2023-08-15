import { UserType } from "./user-type.model";

export class AuthApiResponse{
  message: string = "You are not logged in!";
  token: string = "";
  isLoggedIn: boolean = false;
  userType?: UserType = UserType.Customer;
}
