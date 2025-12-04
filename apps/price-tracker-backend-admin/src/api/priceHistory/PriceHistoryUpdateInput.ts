import { TrackedProductWhereUniqueInput } from "../trackedProduct/TrackedProductWhereUniqueInput";

export type PriceHistoryUpdateInput = {
  capturedAt?: Date | null;
  price?: number | null;
  trackedProduct?: TrackedProductWhereUniqueInput | null;
};
