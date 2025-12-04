import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PriceHistoryService } from "./priceHistory.service";
import { PriceHistoryControllerBase } from "./base/priceHistory.controller.base";

@swagger.ApiTags("priceHistories")
@common.Controller("priceHistories")
export class PriceHistoryController extends PriceHistoryControllerBase {
  constructor(protected readonly service: PriceHistoryService) {
    super(service);
  }
}
