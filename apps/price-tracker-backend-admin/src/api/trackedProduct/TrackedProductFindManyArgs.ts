import { TrackedProductWhereInput } from "./TrackedProductWhereInput";
import { TrackedProductOrderByInput } from "./TrackedProductOrderByInput";

export type TrackedProductFindManyArgs = {
  where?: TrackedProductWhereInput;
  orderBy?: Array<TrackedProductOrderByInput>;
  skip?: number;
  take?: number;
};
