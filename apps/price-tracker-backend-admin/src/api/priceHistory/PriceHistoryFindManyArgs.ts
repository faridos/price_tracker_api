import { PriceHistoryWhereInput } from "./PriceHistoryWhereInput";
import { PriceHistoryOrderByInput } from "./PriceHistoryOrderByInput";

export type PriceHistoryFindManyArgs = {
  where?: PriceHistoryWhereInput;
  orderBy?: Array<PriceHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
