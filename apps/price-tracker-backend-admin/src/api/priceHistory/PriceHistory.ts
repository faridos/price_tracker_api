import { TrackedProduct } from "../trackedProduct/TrackedProduct";

export type PriceHistory = {
  capturedAt: Date | null;
  createdAt: Date;
  id: string;
  price: number | null;
  trackedProduct?: TrackedProduct | null;
  updatedAt: Date;
};
