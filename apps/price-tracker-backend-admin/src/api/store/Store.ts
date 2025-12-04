import { TrackedProduct } from "../trackedProduct/TrackedProduct";

export type Store = {
  baseUrl: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  name: string | null;
  priceSelector: string | null;
  scrapingMethod?: "Option1" | null;
  titleSelector: string | null;
  trackedProducts?: Array<TrackedProduct>;
  updatedAt: Date;
};
