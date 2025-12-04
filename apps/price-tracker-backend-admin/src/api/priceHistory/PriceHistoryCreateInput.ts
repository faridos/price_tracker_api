import { TrackedProductWhereUniqueInput } from "../trackedProduct/TrackedProductWhereUniqueInput";

export type PriceHistoryCreateInput = {
  capturedAt?: Date | null;
  price?: number | null;
  trackedProduct?: TrackedProductWhereUniqueInput | null;
};
