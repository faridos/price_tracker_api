import { TrackedProduct as TTrackedProduct } from "../api/trackedProduct/TrackedProduct";

export const TRACKEDPRODUCT_TITLE_FIELD = "title";

export const TrackedProductTitle = (record: TTrackedProduct): string => {
  return record.title?.toString() || String(record.id);
};
