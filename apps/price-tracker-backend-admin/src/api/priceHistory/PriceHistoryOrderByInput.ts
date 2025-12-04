import { SortOrder } from "../../util/SortOrder";

export type PriceHistoryOrderByInput = {
  capturedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  trackedProductId?: SortOrder;
  updatedAt?: SortOrder;
};
