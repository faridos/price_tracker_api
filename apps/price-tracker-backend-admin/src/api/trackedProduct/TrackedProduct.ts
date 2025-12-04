import { PriceHistory } from "../priceHistory/PriceHistory";
import { Store } from "../store/Store";
import { User } from "../user/User";

export type TrackedProduct = {
  createdAt: Date;
  currentPrice: number | null;
  desiredDiscountPercentage: number | null;
  id: string;
  initialPrice: number | null;
  isActive: boolean | null;
  priceHistories?: Array<PriceHistory>;
  productUrl: string | null;
  store?: Store | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
