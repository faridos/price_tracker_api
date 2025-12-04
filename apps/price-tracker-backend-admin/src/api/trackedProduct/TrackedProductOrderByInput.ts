import { SortOrder } from "../../util/SortOrder";

export type TrackedProductOrderByInput = {
  createdAt?: SortOrder;
  currentPrice?: SortOrder;
  desiredDiscountPercentage?: SortOrder;
  id?: SortOrder;
  initialPrice?: SortOrder;
  isActive?: SortOrder;
  productUrl?: SortOrder;
  storeId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
