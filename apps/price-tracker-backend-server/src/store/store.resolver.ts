import * as graphql from "@nestjs/graphql";
import { StoreResolverBase } from "./base/store.resolver.base";
import { Store } from "./base/Store";
import { StoreService } from "./store.service";

@graphql.Resolver(() => Store)
export class StoreResolver extends StoreResolverBase {
  constructor(protected readonly service: StoreService) {
    super(service);
  }
}
