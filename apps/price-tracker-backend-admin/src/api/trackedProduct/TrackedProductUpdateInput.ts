import { PriceHistoryUpdateManyWithoutTrackedProductsInput } from "./PriceHistoryUpdateManyWithoutTrackedProductsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrackedProductUpdateInput = {
  currentPrice?: number | null;
  desiredDiscountPercentage?: number | null;
  initialPrice?: number | null;
  isActive?: boolean | null;
  priceHistories?: PriceHistoryUpdateManyWithoutTrackedProductsInput;
  productUrl?: string | null;
  store?: StoreWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
