import { PriceHistory as TPriceHistory } from "../api/priceHistory/PriceHistory";

export const PRICEHISTORY_TITLE_FIELD = "id";

export const PriceHistoryTitle = (record: TPriceHistory): string => {
  return record.id?.toString() || String(record.id);
};
