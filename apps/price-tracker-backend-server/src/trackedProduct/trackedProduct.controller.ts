import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrackedProductService } from "./trackedProduct.service";
import { TrackedProductControllerBase } from "./base/trackedProduct.controller.base";

@swagger.ApiTags("trackedProducts")
@common.Controller("trackedProducts")
export class TrackedProductController extends TrackedProductControllerBase {
  constructor(protected readonly service: TrackedProductService) {
    super(service);
  }
}
