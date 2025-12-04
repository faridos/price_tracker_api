import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PriceHistoryServiceBase } from "./base/priceHistory.service.base";

@Injectable()
export class PriceHistoryService extends PriceHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
