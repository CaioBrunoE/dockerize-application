import { User } from "../model/user";

export type LoginResponse = {
  user: User,
  token: string;

}
