import { Store as TStore } from "../api/store/Store";

export const STORE_TITLE_FIELD = "name";

export const StoreTitle = (record: TStore): string => {
  return record.name?.toString() || String(record.id);
};
