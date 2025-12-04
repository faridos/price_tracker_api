import { PriceHistoryCreateNestedManyWithoutTrackedProductsInput } from "./PriceHistoryCreateNestedManyWithoutTrackedProductsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrackedProductCreateInput = {
  currentPrice?: number | null;
  desiredDiscountPercentage?: number | null;
  initialPrice?: number | null;
  isActive?: boolean | null;
  priceHistories?: PriceHistoryCreateNestedManyWithoutTrackedProductsInput;
  productUrl?: string | null;
  store?: StoreWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
