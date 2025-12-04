import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StoreService } from "./store.service";
import { StoreControllerBase } from "./base/store.controller.base";

@swagger.ApiTags("stores")
@common.Controller("stores")
export class StoreController extends StoreControllerBase {
  constructor(protected readonly service: StoreService) {
    super(service);
  }
}
