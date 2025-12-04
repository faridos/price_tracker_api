import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PriceHistoryListRelationFilter } from "../priceHistory/PriceHistoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrackedProductWhereInput = {
  currentPrice?: FloatNullableFilter;
  desiredDiscountPercentage?: FloatNullableFilter;
  id?: StringFilter;
  initialPrice?: FloatNullableFilter;
  isActive?: BooleanNullableFilter;
  priceHistories?: PriceHistoryListRelationFilter;
  productUrl?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
