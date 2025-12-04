import { StoreWhereInput } from "./StoreWhereInput";
import { StoreOrderByInput } from "./StoreOrderByInput";

export type StoreFindManyArgs = {
  where?: StoreWhereInput;
  orderBy?: Array<StoreOrderByInput>;
  skip?: number;
  take?: number;
};
