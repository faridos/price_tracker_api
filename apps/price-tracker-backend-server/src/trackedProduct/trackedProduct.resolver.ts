import * as graphql from "@nestjs/graphql";
import { TrackedProductResolverBase } from "./base/trackedProduct.resolver.base";
import { TrackedProduct } from "./base/TrackedProduct";
import { TrackedProductService } from "./trackedProduct.service";

@graphql.Resolver(() => TrackedProduct)
export class TrackedProductResolver extends TrackedProductResolverBase {
  constructor(protected readonly service: TrackedProductService) {
    super(service);
  }
}
