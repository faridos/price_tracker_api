import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrackedProductServiceBase } from "./base/trackedProduct.service.base";

@Injectable()
export class TrackedProductService extends TrackedProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
