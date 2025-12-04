import { InputJsonValue } from "../../types";
import { TrackedProductCreateNestedManyWithoutUsersInput } from "./TrackedProductCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  passwordHash?: string | null;
  roles: InputJsonValue;
  telegramChatId?: string | null;
  trackedProducts?: TrackedProductCreateNestedManyWithoutUsersInput;
  username: string;
};
