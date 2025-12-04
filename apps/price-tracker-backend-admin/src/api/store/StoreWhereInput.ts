import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TrackedProductListRelationFilter } from "../trackedProduct/TrackedProductListRelationFilter";

export type StoreWhereInput = {
  baseUrl?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  priceSelector?: StringNullableFilter;
  scrapingMethod?: "Option1";
  titleSelector?: StringNullableFilter;
  trackedProducts?: TrackedProductListRelationFilter;
};
