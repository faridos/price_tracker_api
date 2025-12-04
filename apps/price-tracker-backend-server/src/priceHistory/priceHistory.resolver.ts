import * as graphql from "@nestjs/graphql";
import { PriceHistoryResolverBase } from "./base/priceHistory.resolver.base";
import { PriceHistory } from "./base/PriceHistory";
import { PriceHistoryService } from "./priceHistory.service";

@graphql.Resolver(() => PriceHistory)
export class PriceHistoryResolver extends PriceHistoryResolverBase {
  constructor(protected readonly service: PriceHistoryService) {
    super(service);
  }
}
