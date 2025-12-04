import { Module } from "@nestjs/common";
import { TrackedProductModuleBase } from "./base/trackedProduct.module.base";
import { TrackedProductService } from "./trackedProduct.service";
import { TrackedProductController } from "./trackedProduct.controller";
import { TrackedProductResolver } from "./trackedProduct.resolver";

@Module({
  imports: [TrackedProductModuleBase],
  controllers: [TrackedProductController],
  providers: [TrackedProductService, TrackedProductResolver],
  exports: [TrackedProductService],
})
export class TrackedProductModule {}
