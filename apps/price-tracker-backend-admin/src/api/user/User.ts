import { JsonValue } from "type-fest";
import { TrackedProduct } from "../trackedProduct/TrackedProduct";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  passwordHash: string | null;
  roles: JsonValue;
  telegramChatId: string | null;
  trackedProducts?: Array<TrackedProduct>;
  updatedAt: Date;
  username: string;
};
