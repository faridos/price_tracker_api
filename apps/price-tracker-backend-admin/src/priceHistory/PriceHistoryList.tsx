import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRACKEDPRODUCT_TITLE_FIELD } from "../trackedProduct/TrackedProductTitle";

export const PriceHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PriceHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="capturedAt" source="capturedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <ReferenceField
          label="TrackedProduct"
          source="trackedproduct.id"
          reference="TrackedProduct"
        >
          <TextField source={TRACKEDPRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
