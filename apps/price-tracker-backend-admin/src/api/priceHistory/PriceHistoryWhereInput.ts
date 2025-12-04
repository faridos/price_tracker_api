import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TrackedProductWhereUniqueInput } from "../trackedProduct/TrackedProductWhereUniqueInput";

export type PriceHistoryWhereInput = {
  capturedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  trackedProduct?: TrackedProductWhereUniqueInput;
};
