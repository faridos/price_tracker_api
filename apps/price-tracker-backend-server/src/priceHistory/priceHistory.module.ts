import { Module } from "@nestjs/common";
import { PriceHistoryModuleBase } from "./base/priceHistory.module.base";
import { PriceHistoryService } from "./priceHistory.service";
import { PriceHistoryController } from "./priceHistory.controller";
import { PriceHistoryResolver } from "./priceHistory.resolver";

@Module({
  imports: [PriceHistoryModuleBase],
  controllers: [PriceHistoryController],
  providers: [PriceHistoryService, PriceHistoryResolver],
  exports: [PriceHistoryService],
})
export class PriceHistoryModule {}
