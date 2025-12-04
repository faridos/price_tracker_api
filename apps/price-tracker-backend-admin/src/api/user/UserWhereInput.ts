import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrackedProductListRelationFilter } from "../trackedProduct/TrackedProductListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  passwordHash?: StringNullableFilter;
  telegramChatId?: StringNullableFilter;
  trackedProducts?: TrackedProductListRelationFilter;
  username?: StringFilter;
};
