import { InputJsonValue } from "../../types";
import { TrackedProductUpdateManyWithoutUsersInput } from "./TrackedProductUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  passwordHash?: string | null;
  roles?: InputJsonValue;
  telegramChatId?: string | null;
  trackedProducts?: TrackedProductUpdateManyWithoutUsersInput;
  username?: string;
};
