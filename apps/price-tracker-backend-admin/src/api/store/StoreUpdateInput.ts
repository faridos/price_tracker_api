import { TrackedProductUpdateManyWithoutStoresInput } from "./TrackedProductUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  baseUrl?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  priceSelector?: string | null;
  scrapingMethod?: "Option1" | null;
  titleSelector?: string | null;
  trackedProducts?: TrackedProductUpdateManyWithoutStoresInput;
};
