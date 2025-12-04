import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  baseUrl?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  priceSelector?: SortOrder;
  scrapingMethod?: SortOrder;
  titleSelector?: SortOrder;
  updatedAt?: SortOrder;
};
