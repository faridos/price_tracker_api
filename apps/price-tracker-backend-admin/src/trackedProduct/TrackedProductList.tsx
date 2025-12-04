import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TrackedProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TrackedProducts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentPrice" source="currentPrice" />
        <TextField
          label="desiredDiscountPercentage"
          source="desiredDiscountPercentage"
        />
        <TextField label="ID" source="id" />
        <TextField label="initialPrice" source="initialPrice" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="productUrl" source="productUrl" />
        <ReferenceField label="Store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
